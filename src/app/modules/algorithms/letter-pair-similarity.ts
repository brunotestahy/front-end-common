export default class LetterPairSimilarity {

  compareStrings(str1: string, str2: string): number {
    const pairs1 = this.wordLetterPairs(str1.trim().toUpperCase());
    const pairs2 = this.wordLetterPairs(str2.trim().toUpperCase());

    let intersection = 0;
    const union = pairs1.length + pairs2.length;

    for (const pair1 of pairs1) {
      for (let i = 0; i < pairs2.length; i++) {
        const pair2 = pairs2[i];
        if (pair1 === pair2) {
          intersection++;
          pairs2.splice(i, 1);
          break;
        }
      }
    }

    return (2. * intersection) / union;

  }

  private wordLetterPairs(str: string): Array<string> {
    const allPairs = new Array<string>();

    const words = str.split(/\s/g);

    for (const word of words) {
      const pairsInWord = this.letterPairs(word);
      for (const pair of pairsInWord) {
        allPairs.push(pair);
      }
    }

    return allPairs;
  }

  private letterPairs(word: string): Array<string> {
    const numPairs = word.length - 1;
    const pairs = new Array<string>(numPairs);
    for (let i = 0; i < numPairs; i++) {
      pairs[i] = word.substring(i, i + 2);
    }

    return pairs;
  }

}
