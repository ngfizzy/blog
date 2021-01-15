import { Injectable } from '@angular/core';
import { DeviceUUID } from 'device-uuid';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Audience } from '@ngfizzy/entities';
import { AudienceGqlService } from './audience-gql.service';
import { AudienceResponse } from '@ngfizzy/entities/graphql-responses';

@Injectable({ providedIn: 'root' })
export class AudienceService {
  private deviceUUID: string;

  /**
   * Current audience reading
   */
  audienceResponse$: Observable<AudienceResponse>;

  /**
   * True if current audience already already exists in database
   */
  get isAudienceSaved$(): Observable<boolean> {
    return this.audienceResponse$ &&
      this.audienceResponse$.pipe(map(res => res.audience && !!res.audience.id));
  }

  constructor(private audienceGqlService: AudienceGqlService) {
    this.deviceUUID = new DeviceUUID().get();
    this.loadAudience();
  }

  sendMessage(email: string, audienceName: string, message: string) {
    return this.audienceResponse$.pipe(
      switchMap(res => {
        const audience = { ...res.audience, email, audienceName};

        return this.audienceGqlService.sendMessage(audience, message);
      }),
    );
  }
  private loadAudience() {
    const currentUser: Pick<
      Audience,
      Exclude<keyof Audience, 'audienceUUID'>
    > = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      this.audienceResponse$ = this.findAudience(currentUser).pipe(map(res => {

        return res.audience ?
        res
        :
        { ...res, audience: {deviceUUID: this.deviceUUID }} as AudienceResponse;
      }));
    } else {
      const audience = {
        deviceUUID: this.deviceUUID,
      };

      this.audienceResponse$ = of({audience} as AudienceResponse );
    }
  }

  private findAudience(audience: Partial<Audience>) {
    return this.audienceGqlService.getAudience(audience);
  }
}
