export abstract class AbstactTestService {
  abstract testMethod(): string;
  abstract getMessage(): string;
}

export interface AbstactTest {
  testMethod(): string;
  getMessage(): string;
}
