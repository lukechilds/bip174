export interface isMultisigInput {
    script?: string;
}
/** Determine if a script is a standard multisig script

  {
    [script]: <Script Hex String>
  }

  @returns
  <Is Multisig Script Bool>
*/
export declare function isMultisig({ script }: isMultisigInput): boolean;
