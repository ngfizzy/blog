export interface ArticleComponentConfig {
  isFull?: boolean;
  isActive: boolean;
  isExpandedView: boolean;
  isTouched: boolean;
  canToggle?: boolean;
  isMini?: boolean;
  align?: 'left' | 'right';
  shouldHideShadows?: boolean;
  shouldShowActions?: boolean;
}
