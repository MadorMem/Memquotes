
class PincodeChecker{
    static isValidPin(pin)
    {
        if(!pin.match(/^(JN)(-)(\d{4})(-)(\d{4})(-)([A-Z]{2})$/) || !pin)
        return false;
    
        const splitPin = pin.split('-');
        const firstDigits = splitPin[1];
        const secondDigits = splitPin[2];
        const firstChecksumLetter = splitPin[3][0];
        const secondChecksumLetter = splitPin[3][1];
        if(this.calculateWeightedChecksum(firstDigits) !== firstChecksumLetter
        || this.calculateWeightedChecksum(secondDigits) !== secondChecksumLetter)
        {
            return false;
        }

        return true;
    }

    static calculateWeightedChecksum(digits)
    {
      let calculatedChecksum = 0;
      for(let i = 0; i < digits.length; i++)
      {
          const weight = (i % 2) + 1;
          let weightedSum = weight * digits[i];
          if(weightedSum > 9)
          {
              const weighted = weightedSum.toString();
              weightedSum = weighted[0] + weighted[1];
          }
          calculatedChecksum += weightedSum;
      }
      calculatedChecksum = calculatedChecksum % 26 + 65;
      return String.fromCharCode(calculatedChecksum);
    }
    
}

export default PincodeChecker;