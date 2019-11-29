const sampleID = '12345678';
const rackID = '42';
const positionNO = '1';
const analyserNumber = '42424';
const result = {
  D1U: [
    /**
     * - Indicates the attribute of the sample number.
     * "4": Sample number is read by barcode reader
     * "2": Sample number cannot be read by barcode reader
     * "0": Others
     */
    {
      name: 'Sample No. Attribute',
      value: '4',
    },
    /**
     * - Indicates the sample analysis mode.
     * "1": Manual analysis (WB)
     * "2": Sampler analysis (WB)
     * "4": Manual analysis (PD)
     * "5": Manual analysis (HPC)
     * "6": Manual analysis (BF)
     * "7": Sampler analysis (LW)
     * "8": Manual analysis (LW)
     * "9": Manual analysis (hsA)
     */
    {
      name: 'Analysis Mode',
      value: '2',
    },
    /**
     * - Indicates the unique identifier of the patient whose sample was analyzed.
     * The ID consists of extended single-byte characters, left-aligned with space padding.
     * Ex.) "1234567890A🔺🔺🔺🔺🔺" (The symbol🔺represents a space (20h).)
     * If no information is available about the patient ID, spaces (20h) are set to fill the specified number of characters.
     */
    {
      name: 'Patient ID',
      value: ' '.repeat(16),
    },
    /**
     * - Indicates the status of the analysis.
     * “0”: Success
     * “1”: Error
     */
    {
      name: 'Analysis Status',
      value: '0',
    },
    /**
     * - Indicates judgment on the sample to determine the necessity for repeat analysis.
     * “0”: Negative
     * “1”: Positive
     * “2”: Analysis error
     * “3”: Positive and error
     * “Q”: QC sample
     */
    {
      name: 'Judgment on Sample',
      value: '1',
    },
    /**
     * - Indicates whether the measured value of a blood cell type is normal.
     * “0”: Normal
     * “1”: Abnormal
     */
    {
      name: 'Positive (Diff)',
      value: '0',
    },
    /**
     * - Indicates whether there exists abnormality in blood cell morphology.
     * “0”: Normal
     * “1”: Abnormal
     */
    {
      name: 'Positive (Morph)',
      value: '0',
    },
    /**
     * - Indicates whether the blood cell count is normal.
     * “0”: Normal
     * “1”: Abnormal
     */
    {
      name: 'Positive (Count)',
      value: '1',
    },
    /**
     * - Indicates whether Error (Func) occurred.
     * “0”: None of the following errors occurred.
     * “1”: An error occurred except ID barcode reading error and Error (Result).
     */
    {
      name: 'Error (Func)',
      value: '0',
    },
    /**
     * - Indicates whether Error (Result) occurred.
     * “0”: None of the following errors occurred.
     * “1”: One of the following analysis errors occurred: “Sample Not Asp Error”, “Low Blood Volume”, and “Low Count Error”.
     */
    {
      name: 'Error (Result)',
      value: '0',
    },
    /**
     * - Indicates whether the sample was analyzed with order.
     * “0”: Analyzed without order
     * “1”: Analyzed with order
     */
    {
      name: 'With/Without Order',
      value: '1',
    },
    /**
     * - Indicates whether there is any WBC Abnormal IP message.
     * “0”: No IP message
     * “1”: IP message present
     */
    {
      name: 'Presence of WBC Abnormal IP Message',
      value: '0',
    },
    /**
     * - Indicates whether there is any WBC Suspect IP message.
     * “0”: No IP message
     * “1”: IP message present
     */
    {
      name: 'Presence of WBC Suspect IP Message',
      value: '0',
    },
    /**
     * - Indicates whether there is any RBC Abnormal IP message.
     * “0”: No IP message
     * “1”: IP message present
     */
    {
      name: 'Presence of RBC Abnormal IP Message',
      value: '1',
    },
    /**
     * - Indicates whether there is any RBC Suspect IP message.
     * “0”: No IP message
     * “1”: IP message present
     */
    {
      name: 'Presence of RBC Suspect IP Message',
      value: '0',
    },
    /**
     * - Indicates whether there is any PLT Abnormal IP message.
     * “0”: No IP message
     * “1”: IP message present
     */
    {
      name: 'Presence of PLT Abnormal IP Message',
      value: '0',
    },
    /**
     * - Indicates whether there is any PLT Suspect IP message.
     * “0”: No IP message
     * “1”: IP message present
     */
    {
      name: 'Presence of PLT Suspect IP Message',
      value: '0',
    },
    /**
     * - Indicates whether SI units are used.
     * “0”: SI units are not used
     * “1”: SI units are used
     */
    {
      name: 'Unit Information',
      value: '0',
    },
    /**
     * - Indicates with which channel the adopted WBC value was analyzed.
     * “0”: WNR channel
     * “1”: WDF channel
     */
    {
      name: 'WBC Information',
      value: '0',
    },
    /**
     * - Indicates with which channel the adopted PLT value was analyzed.
     * “0”: RBC/PLT channel
     * “1”: RET channel
     * “2”: PLT-F channel
     */
    {
      name: 'PLT Information',
      value: '0',
    },
    /**
     * - Indicates whether test was done with the WPC channel.
     * “0”: Not tested
     * “1”: Tested
     */
    {
      name: 'WPC Information',
      value: '0',
    },
    /**
     * - Indicates the order type.
     * “0”: Initial
     * “1”: Initial/Repeat
     * “2”: Rerun
     * “3”: Rerun/Repeat
     * “4”: Reflex
     * “5”: Reflex/Repeat
     * “6”: Manual
     * “7”: Manual (Open)
     */
    {
      name: 'Order Type',
      value: '0',
    },
    /**
     * - Indicates the evaluation result based on the Repeat/Rerun/Reflex rule (indicates which action to take next for the sample).
     * “0”: None (there is no applicable rule, or evaluation based on the Repeat/Rerun/Reflex rule is not made)
     * “1”: Repeat
     * “2”: Rerun
     * “3”: Reflex
     * "4": Query to host
     * * Set to “0” for manual analysis.
     */
    {
      name: 'Evaluation Based on Rerun Analysis Rule',
      value: '4',
    },
    /**
     * - Indicates the Priority Code in alphanumeric characters. If being set not to output in the “Input and output priority code” of the service setting, “0” is always output.
     */
    {
      name: 'Priority Code',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(15),
    },
    /**
     * - Indicates whether the Action Message “Confirm eosinophil and neutrophil count by other methods.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name:
        'Action Message: Confirm eosinophil and neutrophil count by other methods.',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Aged Sample?” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Aged Sample?',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Suspect sample, check the sample.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Suspect sample, check the sample.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “The sample might be wrong. Check the sample.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: The sample might be wrong. Check the sample.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Significant change in WBC. Check the sample.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Significant change in WBC. Check the sample.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Significant change in HGB. Check the sample.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Significant change in HGB. Check the sample.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Significant change in MCV. Check the sample.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Significant change in MCV. Check the sample.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Significant change in PLT. Check the sample.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Significant change in PLT. Check the sample.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Difference between WNR and WDF. Check the results.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name:
        'Action Message: Difference between WNR and WDF. Check the results.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “Difference between RBC and RET. Check the results.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name:
        'Action Message: Difference between RBC and RET. Check the results.',
      value: '0',
    },
    /**
     * - Indicates whether the Action Message “The PLT test result may have low reliability.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: The PLT test result may have low reliability.',
      value: '0',
    },
    /**
     * - Indicates the grade value of Q-Flag (Blasts?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Blasts?)',
      value: '001',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(3),
    },
    /**
     * - Indicates the grade value of Q-Flag (Left Shift?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Left Shift?)',
      value: '010',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(3),
    },
    /**
     * - Indicates the grade value of Q-Flag (Atypical Lympho?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Atypical Lympho?)',
      value: '010',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(3),
    },
    /**
     * - Indicates the grade value of Q-Flag (Blasts/Abn Lympho?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Blasts/Abn Lympho?)',
      value: '030',
    },
    /**
     * - Indicates the grade value of Q-Flag (RBC Agglutination?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(RBC Agglutination?)',
      value: '070',
    },
    /**
     * - Indicates the grade value Q-Flag (Turb/HGB Interference?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Turb/HGB Interference?)',
      value: '090',
    },
    /**
     * - Indicates the grade value Q-Flag (Iron Deficiency?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Iron Deficiency?)',
      value: '070',
    },
    /**
     * - Indicates the grade value of Q-Flag (HGB Defect?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(HGB Defect?)',
      value: '070',
    },
    /**
     * - Indicates the grade value of Q-Flag (Fragments?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Fragments?)',
      value: '020',
    },
    /**
     * - Indicates the grade value of Q-Flag (PLT Clumps?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(PLT Clumps?)',
      value: '010',
    },
    /**
     * - Indicates the grade value of Q-Flag (Giant Platelet?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Giant Platelet?)',
      value: '000',
    },
    /**
     * - Indicates the grade value of Q-Flag (Abn Lympho?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(Abn Lympho?)',
      value: '001',
    },
    /**
     * - Indicates whether the Action Message “Difference between PLT and PLT-F. Check the results.” is present.
     * “0”: The Action Message is not present
     * “1”: The Action Message present
     */
    {
      name: 'Action Message: Difference between PLT and PLT-F channels.',
      value: '0',
    },
    /**
     * - Indicates the grade value of Q-Flag (iRBC?) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(iRBC?)',
      value: '000',
    },
    /**
     * - Indicates the grade value of Q-Flag (iRBC?(R)) and its additional information.
     * (XXF)
     */
    {
      name: 'QFLAG(iRBC? (R))',
      value: '000',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(10),
    },
    /**
     * (XXXXXXF)μ[/uL]
     */
    {
      name: 'WBC-BF',
      value: ' '.repeat(7),
    },
    /**
     * (XXXXXF) [x10^3/uL]
     */
    {
      name: 'RBC-BF',
      value: ' '.repeat(6),
    },
    /**
     * (XXXXXXF) [/uL]
     */
    {
      name: 'MN#',
      value: ' '.repeat(7),
    },
    /**
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'MN%',
      value: ' '.repeat(5),
    },
    /**
     * (XXXXXXF) [/uL]
     */
    {
      name: 'PMN#',
      value: ' '.repeat(7),
    },
    /**
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'PMN%',
      value: ' '.repeat(5),
    },
    /**
     * (XXXXXXF) [/uL]
     * * If derived software handles the item as a research item, the Service settings (Output_AnalysisInformation) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'TC-BF#',
      value: ' '.repeat(7),
    },
    /**
     * (XXXXF) [x10^(-2)%]
     * * If derived software handles the item as a research item, it is not output. When the item is not output against order, “0”s are set to fill the specified number of characters.
     */
    {
      name: 'HPC%',
      value: '00000',
    },
    /**
     * (XXXXF) [x10^2/uL]
     * * If derived software handles the item as a research item, it is not output. When the item is not output against order, “0”s are set to fill the specified number of characters.
     */
    {
      name: 'IPF#',
      value: '00000',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(13),
    },
  ],
  D2U: [
    /**
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'WBC',
      value: '006000',
    },
    /**
     * (XXXXF) [x10^4/uL]
     */
    {
      name: 'RBC',
      value: '04070',
    },
    /**
     * (XXXXF) [g/L]
     * *[10^(-1) mmol/L] in SI units
     */
    {
      name: 'HGB',
      value: '00500',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'HCT',
      value: '03860',
    },
    /**
     * (XXXXF) [×10^(-1)fL]
     */
    {
      name: 'MCV',
      value: '09580',
    },
    /**
     * (XXXXF) [×10^(-1)pg]
     * *[amol] in SI units
     */
    {
      name: 'MCH',
      value: '03190',
    },
    /**
     * (XXXXF) [g/L]
     * *[10^(-1) mmol/L] in SI units
     */
    {
      name: 'MCHC',
      value: '03370',
    },
    /**
     * (XXXXF) [×10^3/uL]
     */
    {
      name: 'PLT',
      value: '00760',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'LYMPH%',
      value: '05630',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'MONO%',
      value: '00150',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'NEUT%',
      value: '09990',
    },
    /**
     * (XXXXF) [×10^(-1) %]
     */
    {
      name: 'EO%',
      value: '00020',
    },
    /**
     * (XXXXF) [×10^(-1) %]
     */
    {
      name: 'BASO%',
      value: '00020',
    },
    /**
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'LYMPH#',
      value: '061490',
    },
    /**
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'MONO#',
      value: '000090',
    },
    /**
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'NEUT#',
      value: '004400',
    },
    /**
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'EO#',
      value: '000010',
    },
    /**
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'BASO#',
      value: '000010',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'RDW-CV',
      value: '01360',
    },
    /**
     * (XXXXF) [×10^(-1)fL]
     */
    {
      name: 'RDW-SD',
      value: '04730',
    },
    /**
     * (XXXXF) [×10^(-1)fL]
     * * If derived software handles the item as a research (Can be displayed in the main screen) item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'PDW',
      value: '01170',
    },
    /**
     * (XXXXF) [×10^(-1)fL]
     */
    {
      name: 'MPV',
      value: '01080',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'P-LCR',
      value: '03050',
    },
    /**
     * (XXXXF) [×10^(-2) %]
     */
    {
      name: 'RET%',
      value: '00810',
    },
    /**
     * (XXXXF) [×10^2/uL]
     */
    {
      name: 'RET#',
      value: '03300',
    },
    /**
     * (XXXXF) [×10^(-1) %]
     */
    {
      name: 'IRF',
      value: '00230',
    },
    /**
     * (XXXXF) [×10^(-1) %]
     * * If derived software handles the item as a research item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'LFR',
      value: '09770',
    },
    /**
     * (XXXXF) [×10^(-1) %]
     * * If derived software handles the item as a research item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'MFR',
      value: '00210',
    },
    /**
     * (XXXXF) [×10^(-1) %]
     * * If derived software handles the item as a research item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'HFR',
      value: '00020',
    },
    /**
     * (XXXXF) [×10^(-2) %]
     * * If derived software handles the item as a research item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'PCT',
      value: '00132',
    },
    /**
     * (XXXXXF) [×10^(-1)/100WBC]
     */
    {
      name: 'NRBC%',
      value: '000000',
    },
    /**
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'NRBC#',
      value: '000000',
    },
    /**
     * (XXXXXF) [×10/uL]
     * * If derived software handles the item as a research (Can be displayed in the main screen) item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'IG#',
      value: '000030',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     * * If derived software handles the item as a research (Can be displayed in the main screen) item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'IG%',
      value: '00050',
    },
    /**
     * (XXXXXF) [/uL]
     * * If derived software handles the item as a research (Can be displayed in the main screen) item, the Service settings (Output Analysis Information) can be configured not to output the item. In this case, “0”s are assigned to this parameter to fill the specified number of characters.
     */
    {
      name: 'HPC#',
      value: ' '.repeat(6),
    },
    /**
     * (XXXXF) [×10^(-1)pg]
     * *[amol] in SI units
     */
    {
      name: 'RET-He',
      value: '03460',
    },
    /**
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'IPF',
      value: ' '.repeat(5),
    },
  ],
  DBU: [
    //== WBC Abnormal ==//
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'WBC Abn Scattergram',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Neutropenia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Neutrophilia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Lymphopenia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Lymphocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Leukocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Monocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Eosinophilia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Basophilia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Leukocytopenia',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(3),
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'NRBC Present',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'IG Present',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    //== WBC Suspect==//
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Blasts?',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Left Shift?',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(4),
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Atypical Lympho?',
      value: '1',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Blasts/Abn Lympho?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Abn lympho?',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    //== RBC Abnormal ==//
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'RBC Abn Distrib.',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Dimorphic Population',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Anisocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Microcytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Macrocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Hypochromia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Anemia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Erythrocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'RET Abn Scattergram',
      value: '1',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Reticulocytosis',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(6),
    },
    //== RBC Suspect ==//
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'RBC Agglutination?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Turbidity/HGB Interf?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Iron Deficiency?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'HGB Defect?',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Fragments?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'iRBC?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'iRBC?(R)',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(8),
    },
    //== PLT Abnormal ==//
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'PLT Abn Distrib.',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Thrombocytopenia',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Thrombocytosis',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'PLT Abn Scattergram',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(12),
    },
    //== PLT Suspect ==//
    {
      name: 'Reserved',
      value: '0'.repeat(2),
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'PLT Clumps?',
      value: '0',
    },
    /**
     * “0”: Not applicable to flag
     * “1”: Applicable to flag
     */
    {
      name: 'Giant Platelet?',
      value: '0',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(12),
    },
  ],
  D3U: [
    {
      name: 'Data X-axis Size',
      value: ' 50',
    },
    /**
     * - Indicates the maximum data value in the Y-axis (vertical) direction, that is, the maximum value in the data assigned to “DISCRI 1” through “DISCRI 50”. The value is right-aligned with space padding.
     */
    {
      name: 'Data Y-axis Size',
      value: '245',
    },
    {
      name: 'Data Length',
      value: '000212',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * - Indicates the lower discrete limit position. For example, LOWER DISCRI value “5” means the lower discrete limit is positioned at DISCRI 5.
     * The output value is right-aligned with zero padding.
     */
    {
      name: 'LOWER DISCRI',
      value: '0006',
    },
    /**
     * - Indicates the upper discrete limit position. For example, UPPER DISCRI value “25” means the upper discrete limit is positioned at DISCRI 25.
     * The output value is right-aligned with zero padding.
     */
    {
      name: 'UPPER DISCRI',
      value: '0049',
    },
    /**
     * - Indicates the ratio for normalization. Data at discrete positions “DISCRI 1” to “DISCRI 50” multiplied by Ratio equals to the particle size distribution data. The value is right-aligned with zero padding.
     */
    {
      name: 'RATIO (dividing ratio)',
      value: '0035',
    },
    {
      name: 'DISCRI(50)',
      value: [
        '0016',
        '0020',
        '0011',
        '0004',
        '0002',
        '0001',
        '0000',
        '0001',
        '0001',
        '0002',
        '0006',
        '0013',
        '0027',
        '0046',
        '0075',
        '0114',
        '0163',
        '0214',
        '0245',
        '0242',
        '0205',
        '0152',
        '0096',
        '0055',
        '0026',
        '0014',
        '0009',
        '0006',
        '0007',
        '0006',
        '0006',
        '0006',
        '0007',
        '0007',
        '0007',
        '0008',
        '0008',
        '0007',
        '0006',
        '0005',
        '0005',
        '0003',
        '0002',
        '0002',
        '0001',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
      ],
    },
  ],
  D4U: [
    {
      name: 'Data X-axis Size',
      value: ' 40',
    },
    /**
     * - Indicates the maximum data value in the Y-axis (vertical) direction, that is, the maximum value in the data assigned to “DISCRI 1” through “DISCRI 40”.
     * The value is right-aligned with space padding.
     */
    {
      name: 'Data Y-axis Size',
      value: '186',
    },
    {
      name: 'Data Length',
      value: '000172',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * - Indicates the lower discrete limit position. For example, LOWER DISCRI value “5” means the lower discrete limit is positioned at DISCRI 5.
     * The value is right-aligned with zero padding.
     */
    {
      name: 'LOWER DISCRI',
      value: '0001',
    },
    /**
     * - Indicates the upper discrete limit position. For example, UPPER DISCRI value “25” means the upper discrete limit is positioned at DISCRI 25.
     * The value is right-aligned with zero padding.
     */
    {
      name: 'UPPER DISCRI',
      value: '0029',
    },
    /**
     * - Indicates the ratio for normalization. Data at discrete positions “DISCRI 1” to “DISCRI 40” multiplied by Ratio equals to the particle size distribution data.
     * The value is right-aligned with zero padding.
     */
    {
      name: 'RATIO (dividing ratio)',
      value: '0001',
    },
    {
      name: 'DISCRI(40)',
      value: [
        '0000',
        '0001',
        '0010',
        '0029',
        '0062',
        '0123',
        '0181',
        '0186',
        '0172',
        '0139',
        '0122',
        '0100',
        '0083',
        '0067',
        '0058',
        '0035',
        '0030',
        '0023',
        '0025',
        '0021',
        '0012',
        '0010',
        '0009',
        '0009',
        '0011',
        '0008',
        '0007',
        '0007',
        '0004',
        '0004',
        '0004',
        '0004',
        '0005',
        '0008',
        '0005',
        '0006',
        '0010',
        '0009',
        '0013',
        '0018',
      ],
    },
  ],
  D1G: [
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * - Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '003386',
    },
    /**
     * - Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '1',
    },
    {
      name: 'Scattergram Data',
      value:
        '00000000008000001=0000009=06000000000000000000000000000000000000000000000100010?0000000400000300000004050005000000045000090000000430001;0000000533001=000000055500170000000503000100000005010031000000063;00070000000610000;0000000620001100000006;;000=00000006;3006;0000000733012=0000000755012700000007020067000000071100:;00000008=500>=00000008;;012;010000095=006=0100000940006=0000000:91002;0600000;=0002;0200000;==002;0400000;0;002;0000000;;0006=0600000;04006=0200000;22007>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?2?2?;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;118;=?>??7?;==>3?7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?>2>4?7?;?=7>?7?8?=7>;?=?>??7?;?=86>54?7>74?9?=7>;?=?>??7?;?=7>;?61?1?;?=7>;?=?>??7?;?=7><1<9>??7?;?=7>;?=?>??7?;?=7>;?=?70?2?;?=?6935?;=?8>=4559?>17;?=?>??7?;?=?436?9?98;=?>?=72?7>?;<970?27;<;>?979<965??<7>3?75?<7><52896??=32?8;1?;??8?9<;9??<>0?19;<;>?271468519<?<><13>1>4?7?;=927<38970?26;>7;??<7><4>237=7??1016<4;2?8;=?5>5;74?7=5116<5<90?9=>?3?7>?97<3116<7>27716:154273?;3<?7<7=?9>1?55?63:885=126;?75::::?71?<=>267=6???8?5?3=3:72<<;??<9<?2<42:?9:1?<<>9>487<>?73>>558?<>2>9;=6:?<?2::?>35:613>860043?:5?:?4>9538<8571?23;:;?7=5?9;12<84<5:?9<9:>9?5853839960517?<94>:?=7;55?9=935=55:?9>1=5=2=797=?3<??35=557?6???2:3>;7;559?>984812<7>>77<?55>;=?:=74816;?;4?>:7:?:8?7>29<?>4?7>>3?<544;5??5>527=754?5=5=>:77?7=?9<=537=;5?7>97>?4?<;7:<3=?<92=>:7:?><33>347<?;7;6?:=?;;=?5<7=5:9>?1:387302=7=?9<9?5?3=57;;56618>5>1:7;4;6;:=:;;33?<1?7>4;??::59>=055:70871?3184?>;=:??65>=?9=87=?315?5?;?>2=666:6?<>29:>935;=4?1?<218<37??03;>67?6:5:?=7206;?64>65;9:96>6:70:79?829;=??=4546;7>76<;35?5:30<7>4=;5;4;:;277>5>1?7?4>:?5;=0?3:?=82?9>::;357=:447?:19?=7??:?495;=57<=?<18<31?84?43;:6<?:<6<>=479788<370?=94::>?=5=2208?0?8<?;9?=74?68;96:88<190864;;87><2547=>?=5:7469937?3>?=?=?7><3=4?73>2=<=0<323??3=><<7;>?=?>;1754=5;43684>1==>39370?7?>9=?75>3?62?55;9;>:3?<8;<7??76>>><=>=374<7==5?4?922>6=??<;<77=?9=3;09<99?:?99=>>;:79730??7>7>=>7=3??7;>7911299????95>=3>7;?8?30?3?7:?15:?75?32?>1=:>;7??>:725<294>904<9;?86;=6?;4>3;=73>7:77??>7;???:3><47=?7>7?>1===;5:?1?31?3?5=5??879686?;7;=?:68977;<77<6?;6?5>7;95:1>:67>:7?4<8;>5>><??59:1534=1;:7??=355?=3:;<6761937?76>9::8=971;<:3?8=>>;5754?=7<0977=>;5>2288::3385:>??2:7:6:6:6;>7>6869<8<?;;9;;=:3:86967;<=67??:018518<4>0>>5:51=4;42?8>>37=33?=8022547=>1>>>7???=;?6;<5>=8>=7?;?;7??=82:>185=?><7;;5=4=?;9:15:>957><:=0=2;0337736>=6>:2:6=99;70?=86422=9<7;>3==4451=3=>388>37>1?:0135<67;=78;9::869?7;>7;?;:5?9?;=78::2:6?=4=6>;?:53<27<?;==18>=;=?><=??7:61?55:4?;6;<53;8:9:76<6<=;>7977?:096528=:?=<???75=;=;<4<=7:>987=4=89290?;>>1=;7;;=93;<>4?665;3?>1?>=>1935>=6=76;3?74=;?6290;96613474=1435=1<>;=???::599;?3377363;=>511<:?>7<7>6>7<==<3;6>76;3>378>?;?;?516=?=:8?;?773<=66;=<<<?=?94;68436?;2=0;>7>>5??;66?>?=?463>?=?=?37>???=>;956?::9999?9?9?;973??<=;<9?:4;67>5==><?7=?7>??<54;5?9;?:=9?92868572?333>?;=7909496:>;;75=43?>>7?5:333?33??=7>595;;?63?>:?>97>5>;?=?<?4=4<:6=?7:21>9<7962419>9?7?;9=83;99?88>;=75?3?3<15=78?4>42?:?=7>;?=?>??7?;;9>5?7?;?=7>?<>1?72;82=?2?0>7>;?=?>?5704=;>1?705;?=?>??7?;?=7><2>1?78382=?>??77;0??:8109:670?8316742?8>3<3??=9145401714082>59086?3?9087?84>3<?<7?908017104479004<2?17?20<207<3610;<2?07?3>9?<?>7?3399<<?>7?3391<>1801<>10?<461383>84??0373?<87600?=?<6?97<3>9?=;08>7?3713>1?>77084?31?1??>?80311<>>17<3>?><31?<71?92430<',
    },
  ],
  D2G: [
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * - Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '003148',
    },
    /**
     * - Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '1',
    },
    {
      name: 'Scattergram Data',
      value:
        '00000000008000001300000026060000000000000000000000000000000000000000000001000103000000030000010000000303000=000000040100070000000430001?0000000510000?000000053300050000000533013500000006110095000000083;0015000000081101=500000008;300550100000:0600550200000:1900550000000:0500550300000;6000550700000<0900550?00000=;;00551?00000=50007>55?<7>;?=?>??7?;?=7>72?;?=7>;?=?>??7?;?=7>;?5????=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>3?:=2:;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;7==?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;?=7>;?1?=07>;?=?>??7?;?=7>;?=?5595=?2??=7>;?5?5535;?=?>??7?;?=7>5??;?=7>;?=?2??87>;?9?5495=?>??7?;?=7>;?=?>??7?;?=7>;?=?>??7?;<1;17?;?=?1?;?3?84::55>5?70372=:?643<>>?3?42?<=2::4?3:;??=>2;7<770;79=;8?=88?8?589=?7><;>277=?76;;=;7284?3936?97<;<>6?;>33=<76=;8;9??=6>7;21>4:45??2>=?7722?;9>=7684<39=9??4>>;=;;=;>237=?<;7;?79277<;<>70>8:?2>;<97:2186>8;;8>197?796;;:22<5;?<=:;;;26<<976>7>75>7665;;97=<====>=16;??45=4:>?==11727>6>=>:528>?=>;;9765?15;6?85=9<;7;;74;163??6766597;23=<2691;5985>9;65<61<:0;96?3134?915;69527497;72<7>>9==:5;<74;;>=?<=0;7=2>4;=;<9797<56?2=2?<?;;45=97><3;=;7?292;<7;49;6?88=;7==9517=<7;29;:>56>?13;:?3<29;<7;=;?9:159718:932<86?88=;79597>76==9>=<>0?3<42?915=?=;==763;;?32>5:579;9=;6=;744153?>6<:8;93;7;;2=88?3?;;27;9545575>922<<81657>1792;2?=>=;;22<7>65:>;<38<9727;7>>79597>692;;65076=7<?995172<<<>?27>45=69<:927;3;47?<<0=<8::?78;95=?<=477>529;;651765?;2?5;8:2:5?>57;577689>10<>717>6;6:2<:=2;<5<1887383??0==7;=5>5<96>6?=96>59?<<677>?559767=9>>76;96<41;63>>?<:?3927798839<=?752;=?;;=;6559?<=2;;?7::5?7551124214473867=35354?=5>75=1=><11;?>=>15276?7784939<9?97<2>:>:;2<;9650>2275>5175>91645;6?3332?29::7>95>?725;8>11;??38:93?7962=<;;245?:655?78?75>6575=57;2?2?<9<>11;?31;;;=>:7;=595>?96;;1002393?31;;?7::=?;;?7124>84>=<?=>:;7>9565;;17<451<>=78666>7962;:;2>3:420821640;;5459?16<:>=;=>:=28471=;9385?20=8=2?:;:<7<2?<991;??=;677:5592<517?71715>4>72=;<5=9?;?2;;2;4=28876<;?>1<:4;2<476<?371>>5=61023:61>?5;:;901<224;69?67684200>=98<?60692:5?4=>72=<>?2764>?<:42<8<>=<?2=;:5302?7;711>:7995?74772?2903<52??:9>5;6>65<;>26=;?214;991?=9:4><=><;6==104133?2;867;;710>26?=;77==6=>?0>?=?=847;<9>=2==>=>?743>>48?1332?47885??>767>76?0>=?737>2=36389=?1=?:37;49?=<8:76;4:=?=::2?693??:139:=87>;?>><86=?87>;?5?=>885634>=?;755?=37>67633>:3?=7>>??99==?8??:7>?<37;4:6?==04??88476?5?6?=;0?6?;0=35>1;;;>:10=>=67?5?67?6?7?9??6?=::??094=>87=43?;?=;6>?;7?51:?511=?:?>::=0=>=67?77:<=6:;?;1=75;?7?7;3;?:4;7?6839;?0;7?6;;7;;=?=7=<4?79;?;;79?=>5;;7>3:?21=?0?>=:=1=>=277?44:3;>9?=8864?68=0?703>;367<441;=::?6>3?;;=7>;7=3?;<3634>2?;<=<=?81??1?=>036?4=692?653;;?;??=5???;=9;=?>?;1??1?=>4?>;?;7>>7:>;>=433>?6<37;>;?=??;?9?5=??>>??;;=7;==>=:>?>==>1:?119>=<7=686??7??;=975;=?537?<?=>=?;;=;=;?=55;?7:??=>6?:137:??6?;?2=>=57=67??5>::=7;?5;:21=?<?:<90:17;:;?77==?0?>:;??>?;?5=?5?77?7=65;5;9:=088>?27=5?;;?;;=7?5>?:67<59?;2=15?:5=6?75????7;6;<52734::?=9:?:77775=6?;?>;=>;:0=;=96;51?5365==??=7?5>?7:>;9:50??>=>?7?432;=:4?:;;:7:75==;?4284=?;==?75;7>14;?><7;49?5265==15?=?5>?>>;:=>;:?>758=?898>?375559?18:57:0>;?>?5:?;75?33?:>?:?;78??87>4<9515:?<8??75?=;;7?:?>;?:77=7>;?>?;>=?7?;?=7>;?1?07',
    },
  ],
  D3G: [
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * - Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '000000',
    },
    /**
     * - Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '0',
    },
    {
      name: 'Scattergram Data',
      value: '',
    },
  ],
  D4G: [
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * - Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '004866',
    },
    /**
     * - Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '1',
    },
    {
      name: 'Scattergram Data',
      value:
        '00000000008000001;00000081090000000000000000000000000000000000000100000002000102000000030100060000000300000?000000041000070000000411000<0000000450000800000004300014000000059901130000000503001;00000005050010000000059100000000000599000;0000000619002;0000000611010400000006550003000000063300240000000733012300000007;;00>4000000080101>3000000080700640100000904006400000009;30063000000093;00630100000:4000630300000;0?00630?00000<7000630700000<2000?=?=65?:0<=96:?8?>66=9;2=55?7>;6?:;315:2?>?0???>>><??87?:;;??9:=84>;4?972=?;1;;>61?7;7::424?2>?;?;;3;?;??<=5:090>?0?7><;4?2>?;?;93;?>2;?3??;:=84;7?:>3??=?;>8<==1?::8:;7>5;7:?3?5:??527??9?;><;7=55??=6:5082?:9;???=;275?>?7?;777?;1=>56<2?747;?2=:;>11394<5?=556?<;?2?97=?=<9??67<;>43:4;;6?:83=?7:<;=6277<02?7<7;>><7;?;?=0=6?>??>5:>9>5;?0445><?>=84?784;09>:8??>8493:<<?>08>===??86???9=<?;:0:>>6??=;7>?7<7?7??6:;81?;4;5?09>4?32;>12:;8;??6;54>2?4;?6=7707?==<;7:<9?2377<7?>?279<=???3:<;?70==<9??9;25792?3:=86==9?4:;>3;9=?<??275;16=15?::;7>45592=?92?=19=<5?:9??3;9?6<?9<>7:7?7?>:>;57=9:7?;;35>>?>;8?9557>:>>2=5;;2?:3;=?7>?=:?93???>2<9?;?3??6?>>>=7>99420;?3?81?;2;??7?:5>>5?;6?<09:?06:>>106>><?=16;15;<=3=??=9=6<=95?<3415<42365==6:?5?>797257?<2>>>3?>88=7=?4178<;2:==?;???456<24>>2?>1>>9>?1600>0;2>>?5>753<2>6==<009;;70:<?43;48;7:<=2593>?;?=84999973=8>6?>1:791558005800;8;35>?717<16<7307?797>9:89775;:5304=;;;;??0>?759076;97;?=?=<;?2276<73=8>><?=0=?=1:??:3;?9?5:?5=;1;=?;>35>77=4;7=<?9=>7?;2;<133882>8=8?=49?777?4>;><?7?962;881<=35=<=?:03;08:99775?2<9>?=?9<;0;7;9816=4>=:2564;3??>?>82956<9?:93>?089;5;3882?;7;?482?414<;1=;9>>=>::>0989=<0?=3=7??434?0:47??9:=679;>=5=4378=7><?>=7=1=3:<=2?;?<3>138409>610:>>0;0;1::75474?03=7;=>>1208339;=96<>?946=36?797>80>=2=32<:73;9?<><73;6113=;3;62=;<<25=<=?;10:=2=32<?074962=7103<1=;>6==<0=>19;;67:7>;0?=2=32<:;=>?777?2=>=;7;336?13096<6?9;?;83=>474?;54:?7:74;=8><<=09=;=<;0;=?;3;<6:>>4?5474?;5522?9==83;826=?64>=87;33376<>??>943;7:9:6595575:04<1><9=<02642767?=11=3==5;2<>9295<09;=8=;<<=;7;47><<8;1<:<8?6<83>484?;3:<?;=7>9<=04336?;6396197><?>18>9203=<=;2=<?=9??5;?=9;<3963?7><?>8<;70>=2532<<;::??3;?=7;47><04:>>05=<2?=19??77?454:;:=?34>>04=;03981=9=>113;6557><?:83?4548;5649?7;?79336?=><<09=;5<4154><?>90;?83?434<;3:==<922=84<><6=:>=86=5<7>7??4540;38?2?:><4==83;6227><3:;2==77?454>;74;>?711;<>===<03661?36>>18>9=42;6816<>=?==1=3<0555>=7;11388841=;3;=23;8;?>07=909>6:;9;?3?7=0547><<=095<;133767?<7=?=1=32<777??6==376<9;;=3;7837700297><7<<907>9699655??777>1?;1;7096?6>203673<>>><?58454?;39<?427=96?82<=?64>>004;63981:;;85<86?434?0?>74>?7?<984096?7;9;333883?;5;?4909>66==<;:73??36>609;;=<=45;;3?>3203=055<>>??6<;=4?>684==<015;;64?797?<417:9:;;7?7?827<<<217;?3>>>?;:87?414:73;9;5<?67;7;>?06?68>=9?=357?474?;1=<?=9?;>8223;6;93?>>1?=253=<?=<97:5;113;88?0>><??983?414777?;>22>>>0:4==?>7?07>929564915=?;02;76<5<>=809=<=??17?47;?=<>9647=<2376<;6777?9<?<0?:997;;=729>13?8193<72:;>83?4>;54:1881=;113767?=81??=7267>97=9612;6?7?62>=9?=51;?8:?:16=96:90;?61?737>:20:45=>>:<=7?7=7=>41>:>54>096:>13><>;?83470;57=9??19?236?727>::8973;<9?2?7717?<<1?:45<56;=?:83572=;477;:?>>2??3;;:65;9=3=;=?2113?=8=??0769>?75=?5?7<0717::659565:;8:?;;;?47794<;<9?>:0==9??7;>0310808377?6?707=?=?81050078:72??904>>:?5<05<002>?5>?=<5;26>;90370=57?8822;8;?711=04:;5>;5=<1??17?;71<5<56<9>:507?>94:00>?=>??35=<9??8>;9665;9?;>?8??>55709=?>2;=4=??:>;57;<?:767?92;<?65?6?7?0:?757;>7>6=7?;4?<7?07179=;>;??:57<;?>8>>?2?5=?;3::;;??:57?=::>?<?=6;:3?<;567??27;954>7>957<7?>;5:?567;?7?:5=49?7==2:?>:0?3???=??797;?5>:793?:;;57?687<;>;74?6:;;??9;54:=?5??>?>7;5?7?;4125>2?4;?===6?<996;>;??;=?>:6?;??35?7?>?=8:7>8>?:=?>6>5=<3?597;?:=;3?:<3>??5567?;;4>?=>16?257<7?;;:<;7=51??>>4;2;?>1?;93=?527??8275<7??=:9;?;?>2?;:;>?15?1?==9;2?:93<73>45?=?57:=9527??793:;;????;=;=55???11>::?567?7?7?7?<1?7?7?7?717<8?>?>?0>?>?0?507?7?7?;:?<?=?16??5?7?7>7<;>:6?97;?3?5?;6><>?2?57<5?7?7?7477?7?7?7??==;>:0?97:=?>?>80>?:?577?7?7??>?7?7?7?7?7>7<;>:4?577?7?<2?7;75?7?7?7?7?7?7?<07?7?;??:?;;;767?>1=;>?>?>?>?0?577??>?7:77?84?:?;?;?;?;?;?;>;=?>:>?>?>?>?>?>?4????>?>?>7>:9;?;?>;?;?;?;?3<633;>3?7;3<41567?7?7?7?7?;<?:?;?;?;?;?3;?;??>?;?;?;?;6;;1;?;?;?;?3?>7?3;0;?;?;?;?3?6>;<17?;8;677?7?<8><8??:?>?4?1<:=95?:63<8<1866<2><>?9>9>?=659?356=><<1064<9?;5=3=33883670826<?86=93<3=?;5330048;3066<89;5=>34=13111366<6;4=1988:25336?3<072;=0464?6<<20:6<9931=3<6=40?1:=01371=:68;411=13310?;1;=04623=:=373>28036366202;6<>34;4:7710>98800386:16706<>92=91?8009388=<3604?:33=601><6<<86=9399>829>9>367:<0617:0>9><699301330038366?<78<;<439>7441<=073407;=:33618661041:>=593==>813622>230>09<838769<4891>1:;06?620=968>:74<<?39<<01499;<3>09930?;>;;004>730<<0191=404447;=:3368>6<<0>4<9809188:>3158813913424=9=3<31<3<183=67266662098>=;;36122>9:44=7;<061:8<0102<<3><7163<380:49121690<4938>0306002?64?6<<2048<<0?18861<06118331:<6903:3=0<73<6<>264<992=18326>4?9;2432:3=168341:33865463>42<<290=938>>892491198=46:3=19881<<8043<69<<91885885=633389:3=168348634<?8935330=6=9<3=;3756<2689<<301:8=8661>2444<<68:=9=?=?0<',
    },
  ],
  D7G: [
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * - Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '000000',
    },
    /**
     * - Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '0',
    },
    {
      name: 'Scattergram Data',
      value: '',
    },
  ],
  D5U: [
    /**
     * 💡 WBC-N
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'WBC-N',
      value: '006000',
    },
    /**
     * 💡 WBC-D
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'WBC-D',
      value: '005810',
    },
    /**
     * 💡 NEUT#&
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'NEUT#&',
      value: '004370',
    },
    /**
     * 💡 NEUT%&
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'NEUT%&',
      value: '07280',
    },
    /**
     * 💡 LYMP#&
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'LYMP#&',
      value: '001490',
    },
    /**
     * 💡 LYMP%&
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'LYMP%&',
      value: '02480',
    },
    /**
     * 💡 HFLC#
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'HFLC#',
      value: '000000',
    },
    /**
     * 💡 HFLC%
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'HFLC%',
      value: '00000',
    },
    /**
     * 💡 PLT-F2
     * (XXXXXF) [x10^2/uL]
     */
    {
      name: 'PLT-F2',
      value: ' '.repeat(6),
    },
    /**
     * 💡 Delta-HGB
     * (XXXXF) [g/L]
     * *[10^(-1) mmol/L] in SI units
     */
    {
      name: 'Delta-HGB',
      value: '*0000',
    },
    /**
     * 💡 WBC-P
     * (XXXXXF) [×10/uL]
     */
    {
      name: 'WBC-P',
      value: ' '.repeat(6),
    },
    /**
     * 💡 HGB-O
     * (XXXXF) [g/L]
     * *[10^(-1) mmol/L] in SI units
     */
    {
      name: 'HGB-O',
      value: '01350',
    },
    /**
     * 💡 RBC-O
     * (XXXXF) [x10^4/uL]
     */
    {
      name: 'RBC-O',
      value: '04140',
    },
    /**
     * 💡 PLT-O
     * (XXXXF) [x10^3/uL]
     */
    {
      name: 'PLT-O',
      value: '01264',
    },
    /**
     * 💡 PLT-I
     * (XXXXF) [x10^3/uL]
     */
    {
      name: 'PLT-I',
      value: '01170',
    },
    /**
     * 💡 PLT-F
     * (XXXXF) [x10^3/uL]
     */
    {
      name: 'PLT-F',
      value: ' '.repeat(5),
    },
    /**
     * 💡 TNC-N
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'TNC-N',
      value: '006000',
    },
    /**
     * 💡 TNC-D
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'TNC-D',
      value: '005810',
    },
    /**
     * 💡 TNC-P
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'TNC-P',
      value: ' '.repeat(6),
    },
    /**
     * 💡 HPC%
     * (XXXXF) [x10^(-2)%]
     */
    {
      name: 'HPC%',
      value: ' '.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(2),
    },
    /**
     * 💡 FRC#
     * (XXXXF) [x10^2/uL]
     */
    {
      name: 'FRC#',
      value: '00080',
    },
    /**
     * 💡 FRC%
     * (XXXXF) [x10^(-2)%]
     */
    {
      name: 'FRC%',
      value: '00020',
    },
    /**
     * 💡 RBC-He
     * (XXXXF) [×10^(-1)pg]
     * *[amol] in SI units
     */
    {
      name: 'RBC-He',
      value: '03250',
    },
    /**
     * 💡 Delta-He
     * (🔺XXXXF) [×10^(-1)pg]
     * *[amol] in SI units
     * 🔺represents a sign. “-” (2Dh) is output for a negative value, and “0” (30h) for a positive value.
     * XXXX represent the absolute value of the data, right-aligned with zero padding. F represents a flag.
     */
    {
      name: 'Delta-He',
      value: '000210',
    },
    /**
     * 💡 RET-Y
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'RET-Y',
      value: '18560',
    },
    /**
     * 💡 RET-RBC-Y
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'RET-RBC-Y',
      value: '17940',
    },
    /**
     * 💡 IRF-Y
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'IRF-Y',
      value: '18860',
    },
    /**
     * 💡 RPI
     * (XXXXF) No unit
     */
    {
      name: 'RPI',
      value: '00050',
    },
    /**
     * 💡 HYPO-He
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'HYPO-He',
      value: '00020',
    },
    /**
     * 💡 HYPER-He
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'HYPER-He',
      value: '00060',
    },
    /**
     * 💡 MicroR
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'MicroR',
      value: '00150',
    },
    /**
     * 💡 MacroR
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'MacroR',
      value: '00350',
    },
    /**
     * 💡 H-IPF
     * (XXXXF) [×10^(-1)%]
     */
    {
      name: 'H-IPF',
      value: ' '.repeat(5),
    },
    /**
     * 💡 IPF#
     * (XXXXF) [x10^2/uL]
     */
    {
      name: 'IPF#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 TNC
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'TNC',
      value: '006000',
    },
    /**
     * 💡 RET-UPP
     * (XXXXF) No unit
     */
    {
      name: 'RET-UPP',
      value: '00010',
    },
    /**
     * 💡 RET-TNC
     * (XXXXF) No unit
     */
    {
      name: 'RET-TNC',
      value: '00490',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(6),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 LYMPH%
     * (XXXXF) [×10^(-1)%]
     * * The value “LYMPH%” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'LYMPH%',
      value: '02480',
    },
    /**
     * 💡 MONO%
     * (XXXXF) [×10^(-1)%]
     * * The value “MONO%” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'MONO%',
      value: '00150',
    },
    /**
     * 💡 NEUT%
     * (XXXXF) [×10^(-1)%]
     * * The value “NEUT%” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'NEUT%',
      value: '07331',
    },
    /**
     * 💡 EO%
     * (XXXXF) [×10^(-1)%]
     * * The value “EO%” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'EO%',
      value: '00020',
    },
    /**
     * 💡 BASO%
     * (XXXXF) [×10^(-1)%]
     * * The value “BASO%” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'BASO%',
      value: '00020',
    },
    /**
     * 💡 LYMPH#
     * (XXXXXF) [x10/uL]
     * * The value “LYMPH#” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'LYMPH#',
      value: '001490',
    },
    /**
     * 💡 MONO#
     * (XXXXXF) [x10/uL]
     * * The value “MONO#” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'MONO#',
      value: '000090',
    },
    /**
     * 💡 NEUT#
     * (XXXXXF) [x10/uL]
     * * The value “NEUT#” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'NEUT#',
      value: '004400',
    },
    /**
     * 💡 EO#
     * (XXXXXF) [x10/uL]
     * * The value “EO#” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'EO#',
      value: '000010',
    },
    /**
     * 💡 BASO#
     * (XXXXXF) [x10/uL]
     * * The value “BASO#” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'BASO#',
      value: '000010',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 PDW
     * (XXXXF) [x10^(-1)fL]
     * * The value “PDW” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'PDW',
      value: '01170',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 P-LCR
     * (XXXXF) [×10^(-1)%]
     * * The value “P-LCR” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'P-LCR',
      value: '03050',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 LFR
     * (XXXXF) [×10^(-1)%]
     * * The value “LFR” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'LFR',
      value: '09770',
    },
    /**
     * 💡 MFR
     * (XXXXF) [×10^(-1)%]
     * * The value “MFR” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'MFR',
      value: '00210',
    },
    /**
     * 💡 HFR
     * (XXXXF) [×10^(-1)%]
     * * The value “HFR” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'HFR',
      value: '00020',
    },
    /**
     * 💡 PCT
     * (XXXXF) [×10^(-2)%]
     * * The value “PCT” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'PCT',
      value: '00132',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(6),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(6),
    },
    /**
     * 💡 IG#
     * (XXXXXF) [x10/uL]
     * * The value “IG#” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'IG#',
      value: '000030',
    },
    /**
     * 💡 IG%
     * (XXXXF) [x10^(-1)%]
     * * The value “IG%” displayed in the IPU’s Laboratory-Use-Only tab is output.
     */
    {
      name: 'IG%',
      value: '00050',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(6),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(4),
    },
    /**
     * 💡 HF-BF#
     * (XXXXXXF) [/uL]
     */
    {
      name: 'HF-BF#',
      value: ' '.repeat(7),
    },
    /**
     * 💡 HF-BF%
     * (XXXXF) [×10^(-1)/100WBC]
     */
    {
      name: 'HF-BF%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 NE-BF#
     * (XXXXXXF) [/uL]
     */
    {
      name: 'NE-BF#',
      value: ' '.repeat(7),
    },
    /**
     * 💡 NE-BF%
     * (XXXXF) [×10^(-1)/%]
     */
    {
      name: 'NE-BF%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 LY-BF#
     * (XXXXXXF) [/uL]
     */
    {
      name: 'LY-BF#',
      value: ' '.repeat(7),
    },
    /**
     * 💡 LY-BF%
     * (XXXXF) [×10^(-1)/%]
     */
    {
      name: 'LY-BF%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 MO-BF#
     * (XXXXXXF) [/uL]
     */
    {
      name: 'MO-BF#',
      value: ' '.repeat(7),
    },
    /**
     * 💡 MO-BF%
     * (XXXXF) [×10^(-1)/%]
     */
    {
      name: 'MO-BF%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 EO-BF#
     * (XXXXXXF) [/uL]
     */
    {
      name: 'EO-BF#',
      value: ' '.repeat(7),
    },
    /**
     * 💡 EO-BF%
     * (XXXXF) [×10^(-1)/%]
     */
    {
      name: 'EO-BF%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 RBC-BF2
     * (XXXXXXF) [×10^2/uL]
     */
    {
      name: 'RBC-BF2',
      value: ' '.repeat(7),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(7),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(6),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(7),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(7),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 TC-BF#
     * (XXXXXXF) [/uL]
     */
    {
      name: 'TC-BF#',
      value: ' '.repeat(7),
    },
    /**
     * 💡 WBC
     * (XXXXXXXF) [×10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'WBC',
      value: ' '.repeat(8),
    },
    /**
     * 💡 RBC
     * (XXXXXXXXF) [/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'RBC',
      value: ' '.repeat(9),
    },
    /**
     * 💡 RBC-I
     * (XXXXXXF) [x10^2/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'RBC-I',
      value: ' '.repeat(7),
    },
    /**
     * 💡 RBC-O
     * (XXXXXXF) [/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'RBC-O',
      value: ' '.repeat(7),
    },
    /**
     * 💡 MN#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'MN#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 PMN#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'PMN#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 HF#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'HF#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 MN%
     * (XXXXF) [x10^(-1)%]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'MN%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 PMN%
     * (XXXXF) [x10^(-1)%]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'PMN%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 HF%
     * (XXXXF) [×10^(-1)/100WBC]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'HF%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 TC#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'TC#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 MCHC-O
     * (XXXXF) [g/L]
     * *[10^(-1)mmol/L] in SI units
     */
    {
      name: 'MCHC-O',
      value: '03500',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 NE-SSC
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'NE-SSC',
      value: '16230',
    },
    /**
     * 💡 NE-SFL
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'NE-SFL',
      value: '05520',
    },
    /**
     * 💡 NE-FCS
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'NE-FCS',
      value: '10020',
    },
    /**
     * 💡 BA-N#
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'BA-N#',
      value: '000010',
    },
    /**
     * 💡 BA-N%
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'BA-N%',
      value: '00020',
    },
    /**
     * 💡 BA-D#
     * (XXXXXF) [x10/uL]
     */
    {
      name: 'BA-D#',
      value: '000010',
    },
    /**
     * 💡 BA-D%
     * (XXXXF) [x10^(-1)%]
     */
    {
      name: 'BA-D%',
      value: '00020',
    },
    /**
     * 💡 LY-X
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'LY-X',
      value: '08080',
    },
    /**
     * 💡 LY-Y
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'LY-Y',
      value: '08700',
    },
    /**
     * 💡 LY-Z
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'LY-Z',
      value: '06160',
    },
    /**
     * 💡 MO-X
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'MO-X',
      value: '12430',
    },
    /**
     * 💡 MO-Y
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'MO-Y',
      value: '13480',
    },
    /**
     * 💡 MO-Z
     * (XXXXF) [x10^(-1)ch]
     */
    {
      name: 'MO-Z',
      value: '05920',
    },
    /**
     * 💡 NE-WX
     * (XXXXF) No unit
     */
    {
      name: 'NE-WX',
      value: '03080',
    },
    /**
     * 💡 NE-WY
     * (XXXXF) No unit
     */
    {
      name: 'NE-WY',
      value: '06160',
    },
    /**
     * 💡 NE-WZ
     * (XXXXF) No unit
     */
    {
      name: 'NE-WZ',
      value: '06290',
    },
    /**
     * 💡 LY-WX
     * (XXXXF) No unit
     */
    {
      name: 'LY-WX',
      value: '04080',
    },
    /**
     * 💡 LY-WY
     * (XXXXF) No unit
     */
    {
      name: 'LY-WY',
      value: '07930',
    },
    /**
     * 💡 LY-WZ
     * (XXXXF) No unit
     */
    {
      name: 'LY-WZ',
      value: '04870',
    },
    /**
     * 💡 MO-WX
     * (XXXXF) No unit
     */
    {
      name: 'MO-WX',
      value: '02900',
    },
    /**
     * 💡 MO-WY
     * (XXXXF) No unit
     */
    {
      name: 'MO-WY',
      value: '03040',
    },
    /**
     * 💡 MO-WZ
     * (XXXXF) No unit
     */
    {
      name: 'MO-WZ',
      value: '05410',
    },
    /**
     * 💡 NEUT#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'NEUT#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 LYMPH#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'LYMPH#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 MONO#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'MONO#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 EO#
     * (XXXXXXXF) [x10^(-1)/uL]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'EO#',
      value: ' '.repeat(8),
    },
    /**
     * 💡 NEUT%
     * (XXXXF) [x10^(-1)%]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'NEUT%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 LYMPH%
     * (XXXXF) [x10^(-1)%]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'LYMPH%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 MONO%
     * (XXXXF) [x10^(-1)%]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'MONO%',
      value: ' '.repeat(5),
    },
    /**
     * 💡 EO%
     * (XXXXF) [x10^(-1)%]
     * * Values are only set if analyzed in hsA mode.
     */
    {
      name: 'EO%',
      value: ' '.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(35),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(199),
    },
  ],
  D6U: [
    /**
     * 💡 Data X-axis Size
     */
    {
      name: 'Data X-axis Size',
      value: ' 64',
    },
    /**
     * 💡 Data Y-axis Size
     * Indicates the maximum data value in the Y-axis (vertical) direction, that is, the maximum value in the data assigned to “DISCRI 1” through “DISCRI 50”. The value is right-aligned with space padding.
     */
    {
      name: 'Data Y-axis Size',
      value: '254',
    },
    /**
     * 💡 Data Length
     */
    {
      name: 'Data Length',
      value: '000268',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * 💡 LOWER DISCRI
     * Indicates the lower discrete limit position. For example, LOWER DISCRI value “5” means the lower discrete limit is positioned at DISCRI 5.
     * The output value is right-aligned with zero padding.
     */
    {
      name: 'LOWER DISCRI',
      value: '0000',
    },
    /**
     * 💡 UPPER DISCRI
     * Indicates the upper discrete limit position. For example, UPPER DISCRI value “25” means the upper discrete limit is positioned at DISCRI 25.
     * The output value is right-aligned with zero padding.
     */
    {
      name: 'UPPER DISCRI',
      value: '0000',
    },
    /**
     * 💡 RATIO (dividing ratio)
     * Indicates the ratio for normalization. Data at discrete positions “DISCRI 1” to “DISCRI 50” multiplied by Ratio equals to the particle size distribution data. The value is right-aligned with zero padding.
     */
    {
      name: 'RATIO (dividing ratio)',
      value: '0024',
    },
    /**
     * 💡 DISCRI(64)
     */
    {
      name: 'DISCRI(64)',
      value: [
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0001',
        '0001',
        '0001',
        '0003',
        '0003',
        '0005',
        '0009',
        '0013',
        '0020',
        '0030',
        '0044',
        '0066',
        '0092',
        '0127',
        '0168',
        '0211',
        '0239',
        '0254',
        '0244',
        '0225',
        '0176',
        '0123',
        '0077',
        '0041',
        '0017',
        '0006',
        '0003',
        '0002',
        '0002',
        '0001',
        '0001',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
      ],
    },
  ],
  D7U: [
    /**
     * 💡 Data X-axis Size
     */
    {
      name: 'Data X-axis Size',
      value: ' 64',
    },
    /**
     * 💡 Data Y-axis Size
     * Indicates the maximum data value in the Y-axis (vertical) direction, that is, the maximum value in the data assigned to “DISCRI 1” through “DISCRI 50”. The value is right-aligned with space padding.
     */
    {
      name: 'Data Y-axis Size',
      value: '100',
    },
    /**
     * 💡 Data Length
     */
    {
      name: 'Data Length',
      value: '000268',
    },
    {
      name: 'Reserved',
      value: '0',
    },
    /**
     * 💡 LOWER DISCRI
     * Indicates the lower discrete limit position. For example, LOWER DISCRI value “5” means the lower discrete limit is positioned at DISCRI 5.
     * The output value is right-aligned with zero padding.
     */
    {
      name: 'LOWER DISCRI',
      value: '0000',
    },
    /**
     * 💡 UPPER DISCRI
     * Indicates the upper discrete limit position. For example, UPPER DISCRI value “25” means the upper discrete limit is positioned at DISCRI 25.
     * The output value is right-aligned with zero padding.
     */
    {
      name: 'UPPER DISCRI',
      value: '0063',
    },
    /**
     * 💡 RATIO (dividing ratio)
     * Indicates the ratio for normalization. Data at discrete positions “DISCRI 1” to “DISCRI 50” multiplied by Ratio equals to the particle size distribution data. The value is right-aligned with zero padding.
     */
    {
      name: 'RATIO (dividing ratio)',
      value: '0004',
    },
    /**
     * 💡 DISCRI(64)
     */
    {
      name: 'DISCRI(64)',
      value: [
        '0036',
        '0026',
        '0018',
        '0014',
        '0010',
        '0006',
        '0004',
        '0003',
        '0003',
        '0007',
        '0018',
        '0040',
        '0070',
        '0094',
        '0100',
        '0088',
        '0064',
        '0042',
        '0030',
        '0028',
        '0033',
        '0040',
        '0047',
        '0053',
        '0055',
        '0054',
        '0048',
        '0039',
        '0030',
        '0022',
        '0014',
        '0009',
        '0006',
        '0004',
        '0002',
        '0001',
        '0001',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
        '0000',
      ],
    },
  ],
  D5G: [
    /**
     * 💡 Data X-axis Size
     */
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    /**
     * 💡 Data Y-axis Size
     */
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * 💡 Data Length
     * Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '004030',
    },
    /**
     * 💡 Scattergram Compression Info
     * Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '1',
    },
    /**
     * 💡 Scattergram Data
     */
    {
      name: 'Scattergram Data',
      value:
        '000000000080000018000000=?07000000000000000000000000000000000000030000000200010100000003300006000000030000020000000303000000000004050008000000041100040000000410001=0000000533000<000000050700150000000501000=0000000655001<0000000611012=00000006500005000000069901250000000733013<0000000791007<00000008300165000000081900>5010000099900>5000000090301?<000000090400?<0300000:4000?<0100000;2000?<0500000;7000????67487501912:;:3>=0??6=:58::>8884;59:<826<3??69;5892:51>566<40;?81?25135644::9<084=46;86:??:788;072:?=584866603?>0?0991<<9=83116=6:=;76:5?=5?>3<>:572:;95906:63;76>????<8449<78>5<;6319<75:391156;;757;=33>;4??33;522?28:1728>371:<44=8;44==3;66>17<06>2?5:;7>=466;;71;?<6<?>;78953?1429<2;:7:66=:16=0=8666:17=8015?8;?401>:?78<1328>84=8;46>==80=;85;6;5=;=68=9;;639690=27?<:>1179<50;966179>254919::66=9::671=302=8=0;:69175:70>3=6>=072<<004??<?8458;<6819?238=6:6699::681;66=:001700;00=0360?6078>3??8<=?057?4638152?<>199::66=9::671=;;66>1:1;5:5800<343?30017?08>58;<681957<2:685:68106=:;635346>1:78682>:0?=8087=6>6;7<0>?81=?6;45>2152?8:3<6>44=800;44=0;8=:1691;68=;;659689;85160<000;:=>1:23=475>?182=<;9;48=1;436;685;80166<68375:<302?<5?20:?78311>:78:=595;0690116:06=:1757;=13606=8817724>4152?<4:95225:24:6>6=686=;0<18605=88085?68:??61425>?1226558;9;956;2<1006>16>002:6=:7=<4>245<:;01:892>::<1>=54?;??8258;<405945327>54372;>=??1712:?7019:2>98316=:07?8;?:;8458;40<91>:479=68>7=:??09422<<:8968:27>;43;?07?54919057:88<13=9;4=2?>4?72>395>795?1;09:3>>8??942:9695210?2;56=70??:3?25:<1<6;?=;?:>9<5=:9?>0?579;88>;??37211:;156?:9?>5>?48<54:15;1?>6?93912:62?=5?<75:=1<607?:??251;;1=6??75:43:41?4??<:=?915:;1=:;5?>7?935=>9??;;=:541?>:??38?=??1?549;?><7<9?57?1=8=???;=5?5??;=1:>=6:=3??79;=:0??69?:5?:?36=:?57?;>=2??3=?=????>?57=7???5;:40??>??8??3?40?????4??4>0;?50;?>27<9?43?5>???7>97?9=26>:??????3=;9?>????????????:?=3??7?:=????5??4????;?<716:::;>97?9;?=??????2?=4??????????7=?:????;?:7????=;?<????????????>?=0????5>?>????>7=8????6??>8??5??????3?:2??29?:??3?=4??17?;??1?:87;99>85:=0??????;9?>>73593751==196><?<>47?58<??:3?=08416:2?5?<??2?6;5<=6??4:46729499;>:7=?=<>45;>;=:=043?>:?=89392896<>794:=692:1739939=>?5<<4<>::?>6?642;23?9=?:3:;2<<45948:<??=53859507?<867?>4?62<;;2?;??70><>4220;=9><0;79=59=16?:5?46?2??2347<>427:=6;49115?=9?>821??=?7<=:=0:=1>741?2=>4237;?99?49><<4962<3=>44>??23;13>22;;5;47?9=?613;;2>3>>6>2;96:38=?<4?<696><6>4;99=082?>=7=88>6<3>3=>47?92==<85:>8;192<54<<4;1?57?10=97988:=07390?1:<;??4?:<0;3959=0:47672<:3>;2908748761>349:??833<<48:2=5913;9<8??:62<772;>5=42=4=>87?8?==<852147527=6??;3?8>42>?=5?66460;8::3>87?599695=8>:<:??;32<3;>956=74286;391=19<<4>>8>:3=8;=6?>8496?=:9613?7<4;=<;=243?4:041:=;38=38717:4?97:5093996637=>638><245257:<<8>>13?93?642771=4936>:9=;72;4:1??<33<?4>>6>?3:98?>47?;434?59>=>=3;590=;:<66:;97937;=<?;56?>:774919>:8=;92?510?78;?<5?<63=;=273=?9=?567:4:;2:<07?=3?3267:25;767:57;7;:>5<8?91?<;422>=847:<?4?4<88>1=3;0;?91?64178:==7;7:575794??537611<7>971;71227=6??4636>3;8?7?4?4?487>87?37>2534?>?<9??8:?6;2:1<8>:897:7:;764>5??927=74?52>39;=>;42;39:8?2=?7:>>>:>94=3??463>;5=093=2><2<28??9;6<44>:>:==8:?;??;1=<?926:527=6??29?;484:94;:1622?=>?>8253?319?=4;;:2<8<>:6?>07=8449<?4:>74?51>?=6?>8916=:8:7:724:55;=6796>=9457:7:4?2?:71>;;=;?99?5552524:;2=4??77;5:092<;<9>:??:;><:2;;>4<8=6??7052:::26>?=1?4;4>6952?47?<;2>:292=4=5??:772272;;=:;77?56844??2?3993:=92549:12>;43??27;98;<;:94;76?>7?=9444:52>?4:><;<>7972=6441:5=9?99?<:197;88=35=929<??632576>?2:490;=186?>4713<72545?91?660?49>?76;:7;?>;7=5956842??7:65175=25597=49??73<<96=3935>4>>>;69<??57662;56=42=47?9??650?==>>>>5:>8=6??:?1692=>=365>=>6??43>253;79635<?26:46>2=<8=6??2=736297144576?>7?99==?9=4;;64?71<>79>=9>9;67:9<?<2?33?3;147>:96?53?==23<;=2??3273>2<8;=5;??<?<<;27;=495??69;620253=0;719>;3<>:<2<48===2??325;90;:=47;1>?2;?<;169272?;;?66369?2<>5??3<369?<:<97:=775>2:4;;4;??<?<<717:=2?57?<=><1><;;1?2??<<1624;;=;72?>8?=982><?<7?333;;12<6;41?9??659693?>;?:>;83;?=7?9;2=74:;3;??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????=7',
    },
  ],
  D6G: [
    /**
     * 💡 Data X-axis Size
     */
    {
      name: 'Data X-axis Size',
      value: '256',
    },
    /**
     * 💡 Data Y-axis Size
     */
    {
      name: 'Data Y-axis Size',
      value: '256',
    },
    /**
     * 💡 Data Length
     * Indicates the size of the data section in the scattergram. If there is no scattergram, “000000” is assigned. The value is right-aligned with zero padding.
     * “000000” – “032768”
     */
    {
      name: 'Data Length',
      value: '003970',
    },
    /**
     * 💡 Scattergram Compression Info
     * Indicates whether the scattergram is compressed (Run-Length and Huffman). (See Appendix A “Specifications for Scattergrams Compression” for decompressing scattergrams.)
     * “0”: Not compressed
     * “1”: Compressed
     * *If there is no scattergram, “0” is assigned.
     */
    {
      name: 'Scattergram Compression Info',
      value: '1',
    },
    /**
     * 💡 Scattergram Data
     */
    {
      name: 'Scattergram Data',
      value:
        '00000000008000001;000000<107000000000000000000000000000000000000000000000100010;0000000411000=000000041000090000000401000?00000004000015000000055000130000000503001700000005050011000000053000070000000699012500000006700023000000063300210000000655000100000006190027000000079100670000000711010500000007;;00030000000707004500000008990043000000085100<3000000090400<5000000093301<50100000:;300<50300000:4000<30300000:3;00<30500000;0?00<30100000;20007>3?6609?=?9>=97677??:>=?=>9:7:721?=?6?56;4;4<1236=30?>??>?6>3?;;3???3:;5?9=??;=?;>9:7:7=?=>?96=683?;4=474?766?;>14=583?;=?;;;?=?:=>4?<2?59;?3;?3?;3?=?2=>?5>333?;=32?>??<?>?6<;;7;373;;:?1?5:6:3:?;=;2?>?<??<?>:6543?35;;;;=;0?>??==<>=6<3?;5;47467767>?>?5:;?7?733;????::1:5:537?7?;;??:=5?===?9>9<79696?<<=2554<3?5833;7;;;?3;??::525657?7;?7?7???::1:5:4?3773;3???:;1?5:62<><;?=54543?;1:46<6?667>?;:=25253?73;73;;??::125:4;3<?><??>;479?97;;=97=?=>6<>>===>>6<42?53;4;<96>>>>776:69?5:42<>?:===<6=;?;:?;;<?>6=;?39?;;<=><<4<;?;5849<?;==?==52?2=1=679=76;3?;3;;?32>>573?:?64?46>51=1799?<=;88>6;28=>8?>;=>5351=169733;?32?:7?:6525:3?7=059;==;5?21=5>?2;19;;<7<>>:?<?07>?=0:1:>637958>3=;699=97=<39051???:79:5:2?;7428<8;3?>>;:=86>;37968<3>1=0;76?3??56;?;454><9>0>05>7757?:=96>:27?61>3<:;77>?7?:=7>66:9>83=18746>>6?=?;7?09=52?2<15;=0737;;5;51??>?5554;?704?0783>=<<:1?;61?=;?155211<3?<:652;1:763<1>66>0??=45=4??>:77>>>9>0794=;88:?;=7<?><=3<1;3;:87?>56<6;=8:>:?7>=>960;0==5=6?780=?7;?5:8:?79;4:<51>3=>?6;;=61?=8;;8?7?:7525:2?7>86>6?875?<3?:5?3?445<3?;1?768;0?=7;;?861??>=?4;;88<>:679588=>:3;;;=5;<31:86?5>;=?>:179688>>:3<1595?6??8;5?>=?0;1=0>7??7>899?7?>=?5:;?86>1??;=7>5=:9381=0=7:;7<3;07>:=86>:87>>=1==<>?<30;<>10=??:;:878<<303?:3??74?4;<0<<3?0=6:?88>;57>>>9>86>>>=00=2?>132::9?=87=3:7:5>=>???;?7;?5>43?5>;4:43>?=16037;77>0=>??=?0>???45=<??>:>79=8>9>3714866178??=>??4:;87>5=89=8=3=1;372>88661255<4<?5>3?674?4:<<<7:>;7??=<:19>6:7?5>960;0=;3914?>?=?:;75>44355<<4;02?=><?=::3:7=<35=<;?7?15?7?>5?;?:??;?05984?;1?=>;???9550?=<63=1:><6?7>?=7;09?57>?=8:;87>=>?6=160377328:<?57>0=2?>3?:897;?4:<><7:6??=?:?5>?5?49?5>3?2>859;=79>?:=955009=5>?2;117;34=8=<:=?7>;=?7;1==54?><:3;;;?9=?7>?57<235543?:?44><<160333?87:>210<?==63=1804;?=9;5=>:?5551?=<<3=7:16>1?>=?>;=7>>=1<=?=?<;?8>7;?=<<3=;:0=;9840::97>==>><1==?<>????;5?099770???:89;=077773;???<3;?7>6=>><1==?<?=0:2;=>0?=;83;;84?<;????7:?=?;:077333?76;;==750?==23>1=<<?><??<>:17>?;12077?=><3=16><;7>272::9?=7:7639;9=84;<=70?3>1==;>=?65<;?720?05;;7>77>?;120?=>>3>1==;6<435>3?;8?7=8:>1?;><7329;72?==4=>4341;6:3?:;9==87826<;?;;?750;088?<>;17?7:160?=?0=<43;;86?>:?7>?11615059;::>:17?61>=:4<42?;=17;2:0:;65351?=>0=>5351;0>997>?:928=825:41?==5;54;49;9<>:379686>>?3;211=54?=>5310:45?9>;;45;;7>?:6>=1661;=26?>>3=05=;7>?:79>9:79?95=97>78?76>2>22?=>83><;4?>?3>2;?=?4;3=26?<?5=3??>;<?4=37;=76?>?=><=4>;?;934?4597>7689<8<=?4<;?3773;?=?4>>><?5=;;7?=>>12;19=7>=7<0=89;>9:7777>?;=925223;=36?=?6=3?;;546<?:>=999?7>7<77;65?5=227:;3??=34?2>11;97>7;7??;?9>;?713=28?2>0=;=??>=5797866>3?;7>4;49?;?=9>9:7?7:6=?5=2:=::?4?3?;<34?47??;=92521?=?4=2>?37;45?5>?:?9:522=;<?2>0=>=?7;7=?>?<777?;?5==7>79>9?71;;:?=?:4<3?3??;=36?6?42?:?=7>79?:?=7>7=7??:>==97>7??;?9>9?7?;?9>9?7?;?=7>7>:61?9?7>3?20?=?8?6?;?=7>;?;?=3<?6?;?=?72?==>?>4<;?=?6?4?3?3??=?8?<4?;?=?>??7?;?=?:6>;?=?>??7?;?=?8?6?;?=?>?5?;2=>9?7?;;90342?:>983<??4?;?=7>;?3>?=7>;?=?<?4?;?;>?=7>;?9?35?=7>;?=?<?4<<>?4?;?=7>;?76<08:7>?8?4?;0==32?4=3?7>208:7>6<72>6???8=16?9?=36?6=4:?<<988??1337?=::18>3744=<3?4<3>647=99<7>>4344<4754444>?45;069038<>9?8419232:22:69?3360<<???87394<<??:8988:19?=:876<4398>3?671<:327?:8533<619>338?>04<58?::>9<7<<18<7?9>3;4<<491811=3>?9;3?<6?1>78<933315?3:3=?3440<<39631<>718>3?<?993301==3:?1;2062;1<=71<69?3?2=?37?<>>8:70=08?18;31<>718<??9313:722?:5103<42<=6397?;2:3;=983?<>?8=3311993103?7>844=?:>03?1653:1=8621<638<9334499336:183?83?8><3178:1;<719<7?91?0=1133?=;4<1?<388>854271<5367??2>284<48?96:81>?<8?63:150288<631<:76:4222222::6=?30883?160:854261?8714>=1744443?48;06>3585<:150288<9330<2:2248>7><;70<7>20:85<2387<1<191333>36444;?6:;863:15028:6099;??=1>??7<;00',
    },
  ],
  DSU: [
    /**
     * 💡 HGB-BLANK
     * (XXXXX) No unit
     */
    {
      name: 'HGB-BLANK',
      value: '05201',
    },
    /**
     * 💡 HGB-SAMPLE
     * (XXXXX) No unit
     */
    {
      name: 'HGB-SAMPLE',
      value: '06503',
    },
    /**
     * 💡 R-MFV
     * (XXXX) [x10^(-1)fL]
     */
    {
      name: 'R-MFV',
      value: '0968',
    },
    /**
     * 💡 S-RBC
     * (XXXX) [x10^4/uL]
     */
    {
      name: 'S-RBC',
      value: '0000',
    },
    /**
     * 💡 S-MCV
     * (XXXX) [x10^(-1)fL]
     */
    {
      name: 'S-MCV',
      value: '0000',
    },
    /**
     * 💡 L-RBC
     * (XXXX) [x10^4/uL]
     */
    {
      name: 'L-RBC',
      value: '0000',
    },
    /**
     * 💡 L-MCV
     * (XXXX) [x10^(-1)fL]
     */
    {
      name: 'L-MCV',
      value: '0000',
    },
    /**
     * 💡 P-MFV
     * (XXXX) [x10^(-1)fL]
     */
    {
      name: 'P-MFV',
      value: '0088',
    },
    /**
     * 💡 WNR-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WNR-X',
      value: '1523',
    },
    /**
     * 💡 WNR-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WNR-Y',
      value: '1044',
    },
    /**
     * 💡 WNR-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WNR-Z',
      value: '0801',
    },
    /**
     * 💡 WNR-WX
     * (XXXX) No unit
     */
    {
      name: 'WNR-WX',
      value: '0270',
    },
    /**
     * 💡 WNR-WY
     * (XXXX) No unit
     */
    {
      name: 'WNR-WY',
      value: '0691',
    },
    /**
     * 💡 WDF-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WDF-X',
      value: '1623',
    },
    /**
     * 💡 WDF-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WDF-Y',
      value: '0552',
    },
    /**
     * 💡 WDF-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WDF-Z',
      value: '1002',
    },
    /**
     * 💡 WDF-WX
     * (XXXX) No unit
     */
    {
      name: 'WDF-WX',
      value: '0314',
    },
    /**
     * 💡 WDF-WY
     * (XXXX) No unit
     */
    {
      name: 'WDF-WY',
      value: '1300',
    },
    /**
     * 💡 WBC-FX
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WBC-FX',
      value: '0000',
    },
    /**
     * 💡 DLT-WBCD
     * (XXXX) [x10^(-2)]
     */
    {
      name: 'DLT-WBCD',
      value: '0097',
    },
    /**
     * 💡 WPC-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-Y',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 DLT-WBCP
     * (XXXX) [x10^(-2)]
     */
    {
      name: 'DLT-WBCP',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-AREA1#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-AREA1#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-AREA2#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-AREA2#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-AREA3#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-AREA3#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 RET-RBC-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'RET-RBC-X',
      value: '0182',
    },
    /**
     * 💡 RET-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'RET-X',
      value: '0466',
    },
    /**
     * 💡 RET-RBC-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'RET-RBC-Z',
      value: '0377',
    },
    /**
     * 💡 RET-RBC-WX
     * (XXXX) No unit
     */
    {
      name: 'RET-RBC-WX',
      value: '0659',
    },
    /**
     * 💡 RET-RBC-WY
     * (XXXX) No unit
     */
    {
      name: 'RET-RBC-WY',
      value: '0273',
    },
    /**
     * 💡 DLT-RBC
     * (XXXX) [x10^(-2)]
     */
    {
      name: 'DLT-RBC',
      value: '0102',
    },
    /**
     * 💡 DLT-PLTO
     * (XXXX) [x10^(-2)]
     */
    {
      name: 'DLT-PLTO',
      value: '0108',
    },
    /**
     * 💡 Unclassified
     * (XXXX) No unit
     */
    {
      name: 'Unclassified',
      value: '0025',
    },
    /**
     * 💡 PLT-F-AREA1#
     * (XXXXX) No unit
     */
    {
      name: 'PLT-F-AREA1#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 PLT-F-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'PLT-F-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'PLT-F-Y',
      value: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'PLT-F-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-RBC-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'PLT-F-RBC-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-RBC-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'PLT-F-RBC-Y',
      value: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-RBC-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'PLT-F-RBC-Z',
      vlaue: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-RBC-WX
     * (XXXX) No unit
     */
    {
      name: 'PLT-F-RBC-WX',
      value: ' '.repeat(4),
    },
    /**
     * 💡 PLT-F-RBC-WY
     * (XXXX) No unit
     */
    {
      name: 'PLT-F-RBC-WY',
      value: ' '.repeat(4),
    },
    /**
     * 💡 DLT-PLT-F
     * (XXXX) [x10^(-2)]
     */
    {
      name: 'DLT-PLT-F',
      value: ' '.repeat(4),
    },
    /**
     * 💡 NRBC-1%
     * (XXXXX) [×10^(-1)/100WBC]
     */
    {
      name: 'NRBC-1%',
      value: '00000',
    },
    /**
     * 💡 NRBC-2%
     * (XXXXX) [×10^(-1)/100WBC]
     */
    {
      name: 'NRBC-2%',
      value: '00000',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(3),
    },
    /**
     * 💡 WBC-N2
     * (XXXXXX) [/uL]
     */
    {
      name: 'WBC-N2',
      value: '006003',
    },
    /**
     * 💡 TNC-N2
     * (XXXXXX) [/uL]
     */
    {
      name: 'TNC-N2',
      value: '006003',
    },
    /**
     * 💡 WBC-D2
     * (XXXXXX) [/uL]
     */
    {
      name: 'WBC-D2',
      value: '005812',
    },
    /**
     * 💡 TNC-D2
     * (XXXXXX) [/uL]
     */
    {
      name: 'TNC-D2',
      value: '005812',
    },
    /**
     * 💡 WBC-P2
     * (XXXXXX) [/uL]
     */
    {
      name: 'WBC-P2',
      value: ' '.repeat(6),
    },
    /**
     * 💡 TNC-P2
     * (XXXXXX) [/uL]
     */
    {
      name: 'TNC-P2',
      value: ' '.repeat(6),
    },
    /**
     * 💡 HGB_NONSI
     * (XXXX) [g/L]
     */
    {
      name: 'HGB_NONSI',
      value: '0130',
    },
    /**
     * 💡 HGB_SI
     * (XXXX) [10^(-1)mmol/L]
     */
    {
      name: 'HGB_SI',
      value: '0081',
    },
    /**
     * 💡 HGB_SI2
     * (XXXX) [10^(-2)mmol/L]
     */
    {
      name: 'HGB_SI2',
      value: '0808',
    },
    /**
     * 💡 WNR_TOTAL_COUNT
     * (XXXXXXXX) No unit
     */
    {
      name: 'WNR_TOTAL_COUNT',
      value: '00006214',
    },
    /**
     * 💡 WDF_TOTAL_COUNT
     * (XXXXXX) No unit
     */
    {
      name: 'WDF_TOTAL_COUNT',
      value: '005747',
    },
    /**
     * 💡 WDF_PLOT_COUNT
     * (XXXXXX) No unit
     */
    {
      name: 'WDF_PLOT_COUNT',
      value: '005298',
    },
    /**
     * 💡 WPC_TOTAL_COUNT
     * (XXXXXXXX) No unit
     */
    {
      name: 'WPC_TOTAL_COUNT',
      value: ' '.repeat(8),
    },
    /**
     * 💡 WPC_PLOT_COUNT
     * (XXXXXX) No unit
     */
    {
      name: 'WPC_PLOT_COUNT',
      value: ' '.repeat(6),
    },
    /**
     * 💡 RET_TOTAL_COUNT
     * (XXXXXXXX) No unit
     */
    {
      name: 'RET_TOTAL_COUNT',
      value: '00055967',
    },
    /**
     * 💡 PLT-F_SIGNAL_COUNT_A
     * (XXXXXXXX) No unit
     */
    {
      name: 'PLT-F_SIGNAL_COUNT_A',
      value: ' '.repeat(8),
    },
    /**
     * 💡 PLT-F_DATA_COUNT_A
     * (XXXXXX) No unit
     */
    {
      name: 'PLT-F_DATA_COUNT_A',
      value: ' '.repeat(6),
    },
    /**
     * 💡 PLT-F_PLOT_COUNT_A
     * (XXXXXX) No unit
     */
    {
      name: 'PLT-F_PLOT_COUNT_A',
      value: ' '.repeat(6),
    },
    /**
     * 💡 PLT-F_PLOT_COUNT_B
     * (XXXXXX) No unit
     */
    {
      name: 'PLT-F_PLOT_COUNT_B',
      value: ' '.repeat(6),
    },
    /**
     * 💡 AREA-F#
     * (XXXXXX) No unit
     */
    {
      name: 'AREA-F#',
      value: ' '.repeat(6),
    },
    /**
     * 💡 HGB_NONSI2
     * (XXXX) [x10^(-1)g/L]
     */
    {
      name: 'HGB_NONSI2',
      value: '1302',
    },
    {
      name: 'Reserved',
      value: '0'.repeat(73),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(5),
    },
    /**
     * 💡 LY-BF1#
     * (XXXXXX) [/uL]
     */
    {
      name: 'LY-BF1#',
      value: '000000',
    },
    /**
     * 💡 LY-BF2#
     * (XXXXXX) [/uL]
     */
    {
      name: 'LY-BF2#',
      value: '001439',
    },
    /**
     * 💡 MO-BF1#
     * (XXXXXX) [/uL]
     */
    {
      name: 'MO-BF1#',
      value: '000000',
    },
    /**
     * 💡 MO-BF2#
     * (XXXXXX) [/uL]
     */
    {
      name: 'MO-BF2#',
      value: '000000',
    },
    /**
     * 💡 MO-BF3#
     * (XXXXXX) [/uL]
     */
    {
      name: 'MO-BF3#',
      value: '000083',
    },
    /**
     * 💡 HF-BF1#
     * (XXXXXX) [/uL]
     */
    {
      name: 'HF-BF1#',
      value: '000000',
    },
    /**
     * 💡 HF-BF2#
     * (XXXXXX) [/uL]
     */
    {
      name: 'HF-BF2#',
      value: '000000',
    },
    /**
     * 💡 LY-BF1%
     * (XXXX) [x10^(-1)%]
     */
    {
      name: 'LY-BF1%',
      value: '0000',
    },
    /**
     * 💡 LY-BF2%
     * (XXXX) [x10^(-1)%]
     */
    {
      name: 'LY-BF2%',
      value: '0248',
    },
    /**
     * 💡 MO-BF1%
     * (XXXX) [x10^(-1)%]
     */
    {
      name: 'MO-BF1%',
      value: '0000',
    },
    /**
     * 💡 MO-BF2%
     * (XXXX) [x10^(-1)%]
     */
    {
      name: 'MO-BF2%',
      vlaue: '0000',
    },
    /**
     * 💡 MO-BF3%
     * (XXXX) [x10^(-1)%]
     */
    {
      name: 'MO-BF3%',
      value: '0014',
    },
    /**
     * 💡 HF-BF1%
     * (XXXX) [×10^(-1)/100WBC]
     */
    {
      name: 'HF-BF1%',
      value: '0000',
    },
    /**
     * 💡 HF-BF2%
     * (XXXX) [×10^(-1)/100WBC]
     */
    {
      name: 'HF-BF2%',
      value: '0000',
    },
    /**
     * 💡 WPC-GR-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-GR-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-GR-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-GR-Y',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-GR-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-GR-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-L Y-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-L Y-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-L Y-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-L Y-Y',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-L Y-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-L Y-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-MO-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-MO-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-MO-Y
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-MO-Y',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-MO-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-MO-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-L Y2-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-L Y2-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-L Y2-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-L Y2-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-SC-X
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-SC-X',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-SC-Z
     * (XXXX) [x10^(-1)ch]
     */
    {
      name: 'WPC-SC-Z',
      value: ' '.repeat(4),
    },
    /**
     * 💡 WPC-GR#
     * (XXXXX) [x10/uL]
     */
    {
      name: 'WPC-GR#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-LY#
     * (XXXXX) [x10/uL]
     */
    {
      name: 'WPC-LY#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-MO#
     * (XXXXX) [x10/uL]
     */
    {
      name: 'WPC-MO#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-LY2#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-LY2#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-SC#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-SC#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-FL-H1#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-FL-H1#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-FL-H2#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-FL-H2#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-FL-H3#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-FL-H3#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-FL-L1#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-FL-L1#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-LC1#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-LC1#',
      value: ' '.repeat(5),
    },
    /**
     * 💡 WPC-LC2#
     * (XXXXX) No unit
     */
    {
      name: 'WPC-LC2#',
      value: ' '.repeat(5),
    },
    {
      name: 'Reserved',
      value: '0'.repeat(2),
    },
  ],
};

module.exports = {
  sampleID,
  rackID,
  positionNO,
  analyserNumber,
  result,
};
