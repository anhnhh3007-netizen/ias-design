import * as React from 'react';

/**
 * ImportPanel — dismissible inline 2-step import panel for a list screen
 * ("Tải xuống hồ sơ mẫu" → "Tải lên hồ sơ đã bổ sung thông tin").
 * Toggled open by the "Import" entry in `ToolbarSimple`'s trailing action
 * cluster (see component-rules.md). Renders inline inside the `.list-panel`
 * flow, directly below whichever of `ToolbarSimple`/`FilterCard` is
 * currently visible and above the `Table` — it is not a `Modal` (no
 * backdrop, no centered overlay; the list stays visible/scrollable below it).
 *
 * Both steps are simultaneously actionable instructions, not a completion
 * tracker — step 2 isn't gated behind step 1 finishing, so both step badges
 * always render the same "current" treatment (solid brand fill), unlike
 * `Steps`' completed/current/upcoming states.
 */
export interface ImportPanelProps {
  /** Controls visibility — parent owns the open/closed state (toggled from ToolbarSimple's Import button) */
  open: boolean;
  /** Closes the panel — wired to the top-right ✕ */
  onClose: () => void;
  /** Step 1: filename shown in the template file chip, e.g. "Template_file.xlsx" */
  templateFileName: string;
  /** Step 1: triggered by the file chip's download icon-button */
  onDownloadTemplate: () => void;
  /** Step 2: called with the picked File once the user selects one (input[type=file] or drag-drop) */
  onFileSelected: (file: File) => void;
  /** Step 2: max upload size shown in the helper text and enforced on selection, in MB (default 50) */
  maxSizeMB?: number;
  /** Step 2: accepted file extension hint shown/enforced on the picker (default ".xlsx") */
  accept?: string;
  /** Name of the file the user has picked in step 2, if any — switches step 2 into its "selected" state with a Confirm action */
  selectedFileName?: string;
  /** Confirms the import of `selectedFileName` — only rendered once a file is selected */
  onConfirm?: () => void;
  /** Disables Confirm and shows a spinner in its place while the import request is in flight */
  importing?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare const ImportPanel: React.FC<ImportPanelProps>;
export { ImportPanel };
