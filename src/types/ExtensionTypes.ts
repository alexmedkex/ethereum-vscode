export const Views = {
    Tools: 'tools',
    SolidityFiles: 'solidity-files',
    SmartContracts: 'smart-contracts'
}

export const Commands = {
    InputRPCEndpoint: 'extension.InputRPCEndpoint',
    CompileAll: `${Views.SolidityFiles}.compileAll`,
    Deploy: `${Views.SmartContracts}.deploy`,
    DecodeLog: `${Views.Tools}.decodeLog`,
    SendTransaction: `${Views.SmartContracts}.sendTransaction`,
    GetTransactionReceipt: `${Views.Tools}.getTransactionReceipt`,
    CopyContractData: `${Views.SmartContracts}.copyContractData`,
    EncodeFunctionSignature: `${Views.Tools}.encodeFunctionSignature`,
    EncodeEventSignature: `${Views.Tools}.encodeEventSignature`,
    EncodeParameter: `${Views.Tools}.encodeParameter`,
    SendTransactionUsingABI: `${Views.Tools}.sendTransactionUsingABI`,
    OpenSolidityFile: `${Views.SolidityFiles}.openSolidityFile`,
    OpenFileView: `${Views.SolidityFiles}.openFileView`,
    Compile: `${Views.SolidityFiles}.compile`,
    GetAddress: `${Views.SmartContracts}.getAddress`,
    SetAddress: `${Views.SmartContracts}.setAddress`,
    DecodeParameter: `${Views.Tools}.decodeParameter`,
    Namehash: `${Views.Tools}.namehash`
}