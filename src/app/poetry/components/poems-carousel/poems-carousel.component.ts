import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Poem, Poems, Slides } from 'src/app/shared/models';
import { trigger, state, style, transition, animate, group, query } from '@angular/animations';

interface GroupInfo {
  groupStartIndex: number; groupSize: number;
}

interface PoemsMetadata {
  noOfCompleteGroups: number;
  lengthOfIncompleteGroup: number;
  completeGroupLastIndex: number;
}

@Component({
  selector: 'app-poems-carousel',
  templateUrl: './poems-carousel.component.html',
  styleUrls: [ './poems-carousel.component.scss' ],
  animations: [
    trigger('slide', [
     transition('*<=>*', [
       group([
         query(':enter', [
           style({ transform: 'translateX({{offsetEntry}}%)'}),
           animate('400ms ease-in-out', style({ transform: 'translateX(0)' }))
         ], { optional: true}),
         query(':leave', [
           style({ transform: 'translateX(0)' }),
           animate('400ms ease-in-out', style({ transform: 'translateX({{offsetLeave}}%)' })),
         ], { optional: true }),
       ]),
     ]),
    ]),
  ],
})
export class PoemsCarouselComponent implements OnInit, OnChanges, Slides {
  @Input() poems: Poems;
  @Input() groupSize = 6;
  @Input() selectedPoemId: number;

  @Output() poemSelected = new EventEmitter<number>();

  showPreviousButton: boolean;
  showNextButton: boolean;
  poemsGroupList: Poems[];
  currentGroup = 0;
  nextButtonClicked = false;
  prevButtonClicked = false;
  animationParams = this.generateAnimationParams();

  constructor() { }

  ngOnInit() {
    this.poemsGroupList = this.groupPoems();
    this.showPreviousButton = this.shouldShowPreviousButton();
    this.showNextButton = this.shouldShowNextButton();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { selectedPoemId } = changes;
    if (!selectedPoemId.isFirstChange()) {
      this.jumpToGroup(selectedPoemId.previousValue, selectedPoemId.currentValue);
    }
  }

  selectPoem(selectedPoem: Poem, groupIndex: number) {
    this.selectedPoemId = selectedPoem.id;
    this.currentGroup = groupIndex;

    this.poemSelected.emit(this.selectedPoemId);
  }


  goToPreviousSlide() {
    this.showNextButton = true;
    this.prevButtonClicked = true;
    this.nextButtonClicked = false;

    this.currentGroup -=  1;
    this.animationParams = this.generateAnimationParams();
    this.showPreviousButton = this.shouldShowPreviousButton();
  }

  goToNextSlide() {
    this.showPreviousButton = true;
    this.prevButtonClicked = false;
    this.nextButtonClicked = true;
    this.currentGroup += 1;
    this.animationParams = this.generateAnimationParams();
    this.showNextButton = this.shouldShowNextButton();
  }

  private jumpToGroup(prevPoemId: number, currentPoemId: number) {
    const curGroup = this.findPoemGroup(currentPoemId);
    const prevGroup = this.findPoemGroup(prevPoemId);

    this.prevButtonClicked = prevGroup > curGroup;
    this.nextButtonClicked = prevGroup < curGroup;

    this.currentGroup = curGroup;

    this.animationParams = this.generateAnimationParams();
    this.showNextButton = this.shouldShowNextButton();
    this.showPreviousButton = this.shouldShowPreviousButton();
  }

  private findPoemGroup(poemId: number) {
    const index = this.poems.findIndex(poem => poem.id === poemId);
    const foundGroup =  Math.round((index / this.groupSize) / (this.poemsGroupList.length));

    return foundGroup;
  }

  private generateAnimationParams() {
    return {
      value: this.prevButtonClicked || this.nextButtonClicked,
      params: {
        offsetEntry: this.nextButtonClicked ? 100 : -100,
        offsetLeave: this.prevButtonClicked ? -100 : 100,
      },
    };
  }

  private groupPoems() {
    if (this.groupSize >= this.poems.length) {
      return [ this.poems ];
    }

    const groupList: Poems[] = [];
    const { completeGroupLastIndex, noOfCompleteGroups } = this.getPoemsMetadata();

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

  private getPoemsMetadata(): PoemsMetadata {
    const noOfCompleteGroups = Math.floor(this.poems.length / this.groupSize);
    const lengthOfIncompleteGroup = this.poems.length - (noOfCompleteGroups * this.groupSize);
    return {
      noOfCompleteGroups,
      lengthOfIncompleteGroup,
      completeGroupLastIndex: (this.poems.length - lengthOfIncompleteGroup),
    };
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
    const grp = poems.slice(groupStartIndex, groupSize + groupStartIndex);

    groupList.push(grp);
  }
}
