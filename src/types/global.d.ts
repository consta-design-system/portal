interface Window {
  gpnSpaUrl: string;
  gpnCounterId: number;
  apiVersion: string;
  gpnAnalytics?: {
    sendEvent: (
      eventType: nuber,
      payload?: {
        componentid?: string;
        constaeventtype?: string;
        component?: string;
        customparams?: {
          name: string;
          type: 'STRING' | 'INT' | 'FLOAT' | 'BOOLEAN' | 'DATE';
          value: string | number | boolean;
        }[];
      },
    ) => void;
  };
}
