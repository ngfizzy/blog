import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poem } from 'src/app/shared/models';

interface GroupInfo {
  groupStartIndex: number; groupSize: number;
}

@Component({
  selector: 'app-poems-carousel',
  templateUrl: './poems-carousel.component.html',
  styleUrls: [ './poems-carousel.component.scss' ]
})
export class PoemsCarouselComponent implements OnInit {
  @Input() poems: Poem[];
  @Input() groupSize = 6;
  @Input() selectedPoemId: number;

  @Output() poemSelected = new EventEmitter<number>();

  showPreviousButton: boolean;
  showNextButton: boolean;
  poemsGroupList: Poem[][];
  currentGroup = 0;

  constructor() { }

  ngOnInit() {
    this.poemsGroupList = this.groupPoems();
    this.showPreviousButton = this.shouldShowPreviousButton();
    this.showNextButton = this.shouldShowNextButton();
  }

  groupPoems() {
    if (this.groupSize >= this.poems.length) {
      return [ this.poems ];
    }

    const groupList: Poem[][] = [];

    const noOfCompleteGroups = Math.floor(this.poems.length / this.groupSize);
    const lengthOfIncompleteGroup =  this.poems.length - (noOfCompleteGroups * this.groupSize);
    const completeGroupLastIndex = (this.poems.length - lengthOfIncompleteGroup);

    for (let groupNumber = 0; groupNumber < noOfCompleteGroups; groupNumber++) {
      const groupStartIndex =  groupNumber * this.groupSize;

      this.addGroup(
        groupList,
        this.poems,
        { groupStartIndex, groupSize: this.groupSize });
    }

    if (completeGroupLastIndex <= this.poems.length - 1) {
      const lastGroupSize =  (this.poems.length) - completeGroupLastIndex;

      this.addGroup(groupList, this.poems, {
        groupStartIndex: completeGroupLastIndex,
        groupSize: lastGroupSize,
      });
    }

    return groupList;
  }

  private shouldShowPreviousButton(): boolean {
    return this.currentGroup > 0 && this.poemsGroupList.length > 1;
  }

  private shouldShowNextButton(): boolean {
    const isShowingLastGroup = this.poemsGroupList[this.currentGroup]
      === this.poemsGroupList[this.poemsGroupList.length - 1];

    return this.poemsGroupList.length > 1 && isShowingLastGroup === false;
  }

  private addGroup(groupList: Poem[][], poems: Poem[], groupInfo: GroupInfo) {
    const { groupSize, groupStartIndex} = groupInfo;
    const group = poems.slice(groupStartIndex, groupSize + groupStartIndex);

    groupList.push(group);
  }
}
