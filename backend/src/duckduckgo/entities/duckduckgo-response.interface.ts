export class DuckDuckGoIcon {
  URL: string;
  Height: string;
  Width: string;
}

export class DuckDuckGoRelatedTopic {
  FirstURL: string;
  Text: string;
  Icon: DuckDuckGoIcon;
  Result: string;
  Name?: string;
  Topics?: DuckDuckGoRelatedTopic[];
}

export class DuckDuckGoResponse {
  Abstract: string;
  AbstractSource: string;
  AbstractText: string;
  AbstractURL: string;
  Answer: string;
  AnswerType: string;
  Definition: string;
  DefinitionSource: string;
  DefinitionURL: string;
  Entity: string;
  Heading: string;
  Image: string;
  ImageHeight: number;
  ImageIsLogo: number;
  ImageWidth: number;
  Infobox: string;
  Redirect: string;
  RelatedTopics: DuckDuckGoRelatedTopic[];
  Results: any[];
  Type: string;
  meta: any;
}
