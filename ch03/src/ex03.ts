export interface EventPayloads {
    start: {
      user: string;
    };
    stop: {
      user: string;
      after: number;
    };
    end: {};
  }
  
  export class EventDischarger<E> {
    emit<Ev extends keyof E>(eventName: Ev, payload: E[Ev]):{ eventName: Ev; payload: E[Ev]; }{
        return {eventName,payload};
    }
  }