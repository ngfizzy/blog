import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPoetry from '../../state';
import * as fromPoetryActions from '../../state/poetry.actions';
import { Poem } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface GroupInfo {
  groupStartIndex: number; groupSize: number;
}

@Component({
  templateUrl: 'poems-single-row-list.component.html',
  styleUrls: [ './poems-single-row-list.component.scss' ]
})
export class PoemsSingleRowListComponent implements OnInit {
  private poems$: Observable<Poem[]>;
  groupedPoems$: Observable<Poem[][]>;
  currentGroup = 0;

  constructor(
    private store: Store<fromPoetry.PoetryState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromPoetryActions.GetAllPoems());
    this.poems$ = this.store.pipe(select(fromPoetry.getAllPoems));

    this.groupPoems(6);
  }

  private groupPoems(groupSize: number) {
    this.groupedPoems$ = this.poems$.pipe(
      map(poems => this.getGroupList(poems, groupSize)),
    );
  }

  private getGroupList(poems: Poem[], groupSize: number) {
    if (groupSize >= poems.length) {
      return [ poems ];
    }

    const groupList: Poem[][] = [];

    const noOfCompleteGroups = Math.floor(poems.length / groupSize);
    const lengthOfIncompleteGroup =  poems.length - (noOfCompleteGroups * groupSize);
    const completeGroupLastIndex = (poems.length - lengthOfIncompleteGroup);

    for (let groupNumber = 0; groupNumber < noOfCompleteGroups; groupNumber++) {
      const groupStartIndex =  groupNumber * groupSize;

      this.addGroup(groupList, poems, { groupStartIndex, groupSize });
    }

    if (completeGroupLastIndex <= poems.length - 1) {
      const lastGroupSize =  (poems.length) - completeGroupLastIndex;

      this.addGroup(groupList, poems, {
        groupStartIndex: completeGroupLastIndex,
        groupSize: lastGroupSize,
      });
    }

    return groupList;
  }

  private addGroup(groupList: Poem[][], poems: Poem[], groupInfo: GroupInfo) {
    const { groupSize, groupStartIndex} = groupInfo;
    const group = poems.slice(groupStartIndex, groupSize + groupStartIndex);

    groupList.push(group);
  }
}
