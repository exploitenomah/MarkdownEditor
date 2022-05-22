import { uiState, doc } from "./store.types";



export interface homeSectionProps {
  ui: uiState,
  doc: doc
}
export interface markdownProps extends homeSectionProps {
  
}
export interface previewProps extends homeSectionProps {

}