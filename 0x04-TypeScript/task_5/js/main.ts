declare const MAJOR_BRAND: unique symbol;
declare const MINOR_BRAND: unique symbol;

interface MajorCredits {
  credits: number;
  readonly [MAJOR_BRAND]: void;
}

interface MinorCredits {
  credits: number;
  readonly [MINOR_BRAND]: void;
}

function createMajorCredits(credits: number): MajorCredits {
  return { credits } as MajorCredits;
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits } as MinorCredits;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

const majorSubject1 = createMajorCredits(3);
const majorSubject2 = createMajorCredits(4);

const minorSubject1 = createMinorCredits(1);
const minorSubject2 = createMinorCredits(2);

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Major Credits Total:', totalMajorCredits.credits);
console.log('Minor Credits Total:', totalMinorCredits.credits);
