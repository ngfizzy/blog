import { Injectable } from '@angular/core';
import { DeviceUUID } from 'device-uuid';
import { Audience } from '../../shared/models';
import { findAudience } from '../../mock-server';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AudienceService {
  private deviceUUID: string;

  /**
   * Current audience reading
   */
  audience$: Observable<Audience>;

  /**
   * True if current audience already already exists in database
   */
  get isAudienceSaved$(): Observable<boolean> {
    return this.audience$ &&
      this.audience$.pipe(map(aud => aud && !!aud.id))
      ;
  }

  constructor() {
    this.deviceUUID = new DeviceUUID().get();
    this.loadAudience();
  }

  private loadAudience() {
    const currentUser: Pick<
      Audience,
      Exclude<keyof Audience, 'audienceUUID'>
    > = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      this.audience$ = of(this.findAudience(currentUser) as Audience);
    } else {
      const audience: Partial<Audience> = {
        deviceUUID: this.deviceUUID,
      };

      this.audience$ = of(audience) as Observable<Audience>;
    }
  }

  private findAudience(audience: Partial<Audience>) {
    const found = findAudience({ ...audience });

    if (!found) {
      audience.deviceUUID = this.deviceUUID;
    }

    return found || audience;
  }
}
