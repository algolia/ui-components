import { RecordWithObjectID } from './RecordWithObjectID';

export type ViewProps<
  TItem extends RecordWithObjectID,
  TTranslations extends Record<string, string>,
  TClassNames extends Record<string, string>
> = {
  classNames: TClassNames;
  itemComponent({ item: TItem }): JSX.Element;
  items: TItem[];
  translations: TTranslations;
};