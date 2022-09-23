
/**
 * Why these characters?
 * - We use only lowercase, making paths easier to remember and say
 * - We skip potential look-alikes: 0, o, 1, i, l
 * - We skip all vowels, to be sure we can't generate anything offensive
 */

const targetChars = '23456789bcdfghjkmnpqrstvwxyz';  // must be <=36 chars
const sourceChars = '0123456789abcdefghijklmnopqr';  // what we get from toString(28)
const radix = targetChars.length;

export function tokenFromId(id: number) {
  return [...id.toString(radix)]
    .map(origChar => targetChars.charAt(sourceChars.indexOf(origChar)))
    .join('');
}

export function idFromToken(token: string) {
  return parseInt([...token.toLowerCase()]
    .map(pathChar => sourceChars.charAt(targetChars.indexOf(pathChar)))
    .join('')
  , radix);
}
