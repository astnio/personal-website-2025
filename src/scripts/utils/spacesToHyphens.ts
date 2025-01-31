export default function convertSpacesToHyphens(str: string): string {
  return str.replace(/\s+/g, '-');
}
