// Represents the infobox structure within the DuckDuckGo response
export interface InfoboxContent {
  data_type: string;
  label: string;
  value: string | string[];
  wiki_order: number | string;
}

export interface InfoboxMeta {
  data_type: string;
  label: string;
  value: string;
}

export interface Infobox {
  content: InfoboxContent[];
  meta: InfoboxMeta[];
}

// Represents the related topics structure within the DuckDuckGo response
export interface RelatedTopic {
  FirstURL: string;
  Icon: {
    Height: string;
    URL: string;
    Width: string;
  };
  Result: string;
  Text: string;
}

// Represents the meta information within the DuckDuckGo response
export interface Meta {
  attribution: string | null;
  blockgroup: string | null;
  created_date: string | null;
  description: string;
  designer: string | null;
  dev_date: string | null;
  dev_milestone: string;
  developer: { name: string; type: string; url: string }[];
  example_query: string;
  id: string;
  is_stackexchange: string | null;
  js_callback_name: string;
  live_date: string | null;
  maintainer: { github: string };
  name: string;
  perl_module: string;
  producer: string | null;
  production_state: string;
  repo: string;
  signal_from: string;
  src_domain: string;
  src_id: number;
  src_name: string;
  src_options: {
    directory: string;
    is_fanon: number;
    is_mediawiki: number;
    is_wikipedia: number;
    language: string;
    min_abstract_length: string;
    skip_abstract: number;
    skip_abstract_paren: number;
    skip_end: string;
    skip_icon: number;
    skip_image_name: number;
    skip_qr: string;
    source_skip: string;
    src_info: string;
  };
  src_url: string | null;
  status: string;
  tab: string;
  topic: string[];
  unsafe: number;
}

// Represents the overall response from the DuckDuckGo API
export interface DuckDuckGoResponse {
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
  Infobox: Infobox;
  Redirect: string;
  RelatedTopics: RelatedTopic[];
  Results: any[];
  Type: string;
  meta: Meta;
}
