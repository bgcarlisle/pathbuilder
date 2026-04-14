var magnitude_regex = [
    // Percentage changes and increases/decreases (actual effect magnitudes)
    /\b\d+(?:\.\d+)?\s*(?:%|percent)\s+(?:increase|decrease|reduction|elevation|improvement|worsening|change)\b/gi,
    /\b(?:increased|decreased|reduced|elevated|lowered|improved|worsened)\s+by\s+\d+(?:\.\d+)?\s*(?:%|percent)?/gi,
    /\b\d+(?:\.\d+)?-?\s*fold\s+(?:increase|decrease|reduction|elevation|improvement|worsening|change)\b/gi,
    /\b\d+(?:\.\d+)?\s*(?:%|percent)\s+(?:higher|lower|greater|smaller)\s+than\b/gi,
    
    // Statistical measures that represent effect magnitude
    /\bHR\b/gi,
    /\bhazard\s+ratio\b/gi,
    /\bHR\s*[=:]\s*\d+(?:\.\d+)?(?:\s*$$\s*95%\s*CI\s*[:]\s*[\d\.]+\s*[-–]\s*[\d\.]+\s*$$)?/gi,
    /\bhazard\s+ratio\s*[=:]\s*\d+(?:\.\d+)?(?:\s*$$\s*95%\s*CI\s*[:]\s*[\d\.]+\s*[-–]\s*[\d\.]+\s*$$)?/gi,
    
    /\bOR\b/g,
    /\bodds\s+ratio\b/gi,
    /\bOR\s*[=:]\s*\d+(?:\.\d+)?/g,
    /\bodds\s+ratio\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    /\bRR\b/gi,
    /\brelative\s+risk\b/gi,
    /\bRR\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\brelative\s+risk\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\brisk\s+ratio\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Risk reduction percentages
    /\bRRR\b/gi,
    /\brelative\s+risk\s+reduction\b/gi,
    /\bRRR\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    /\brelative\s+risk\s+reduction\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    /\bARR\b/gi,
    /\babsolute\s+risk\s+reduction\b/gi,
    /\bARR\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    /\babsolute\s+risk\s+reduction\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    
    // Effect sizes
    /\bCohens?\s+d\b/gi,
    /\beffect\s+size\b/gi,
    /\bSMD\b/gi,
    /\bstandardized\s+mean\s+difference\b/gi,
    /\bCohens?\s+d\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\beffect\s+size\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bSMD\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bstandardized\s+mean\s+difference\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    
    // Correlations
    /\bcorrelation\b/gi,
    /\bcorrelation\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\br\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bR\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\brho\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bPearson\s+correlation\b/gi,
    /\bSpearman\s+correlation\b/gi,
    
    // Diagnostic accuracy measures (effect magnitude)
    /\bsensitivity\b/gi,
    /\bsensitivity\s*[=:]\s*\d+(?:\.\d+)?%/gi,
    /\bspecificity\b/gi,
    /\bspecificity\s*[=:]\s*\d+(?:\.\d+)?%/gi,
    /\bAUC\b/gi,
    /\bAUC\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\barea\s+under\s+curve\b/gi,
    
    // Clinical outcome magnitudes (percentages and rates)
    /\bsurvival\s+(?:rate)?\s*[=:]\s*\d+(?:\.\d+)?%/gi,
    /\bmortality\s+(?:rate)?\s*[=:]\s*\d+(?:\.\d+)?%/gi,
    /\bresponse\s+rate\s*[=:]\s*\d+(?:\.\d+)?%/gi,
    /\bremission\s+rate\s*[=:]\s*\d+(?:\.\d+)?%/gi,
    /\bprogression[\s-]free\s+survival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\boverall\s+survival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Number needed to treat/harm (effect magnitudes)
    /\bNNT\s*[=:]\s*\d+/gi,
    /\bNNH\s*[=:]\s*\d+/gi,
    
    // General effect indicators
    /\beffect\s+size\b/gi,
    /\bcohen\'?s\s+d\b/gi,
    /\bstatistically\s+significant\b/gi,
    /\bsignificant\s+effect\b/gi,
    /\bclinically\s+significant\b/gi,
    /\bstatistical\s+significance\b/gi,
    /\bp\s*<\s*0\.05\b/gi,
    /\bp\s*[=<]\s*0\.05\b/gi,

    /\b>\d+(?:\.\d+)?%\s+shrinkage\b/gi,
    /\b\d+(?:\.\d+)?%\s+shrinkage\b/gi,
    /\btumor\s+shrinkage\b/gi,
    /\breduced\s+tumor\s+(?:growth|size)\b/gi,
    /\btumor\s+growth\s+(?:reduction|decrease|inhibition)\b/gi,
    /\bsignificantly\s+reduced\s+tumor\s+(?:growth|size)\b/gi,
    /\btumor\s+(?:size|volume|mass)\s+(?:reduction|decrease|shrinkage)\b/gi,
    /\banti-?(?:tumor|cancer)\s+activity\b/gi,
    /\banti-?tumou?r\s+activity\b/gi,
    
    /\b>\d+(?:\.\d+)?%/gi,
    /\b<\d+(?:\.\d+)?%/gi,
    /\b(?:≥|>=|<=|≤)\s*\d+(?:\.\d+)?%/gi,
    /\b$$\s*>\s*\d+(?:\.\d+)?%\s*$$/gi,
    /\b$$\s*>\d+(?:\.\d+)?%\s*(?:shrinkage|reduction|decrease|growth)\s*$$/gi,
    
    /\b(?:tumor|cancer)\s+(?:growth|size|volume|mass)\s+(?:reduction|decrease|shrinkage)\s+(?:of|by)\s+\d+(?:\.\d+)?%/gi,
    /\breduction\s+in\s+(?:tumor|cancer)\s+(?:growth|size|volume|mass)\s+(?:of|by)\s+\d+(?:\.\d+)?%/gi,
    /\b(?:tumor|cancer)\s+(?:response|remission|control)\s+rate\s*[:=]?\s*\d+(?:\.\d+)?%/gi,

    /\binhibits\s+growth\s+by\s+\d+(?:\.\d+)?%\b/gi,
    /\bgrowth\s+inhibition\s+(?:of|by)\s+\d+(?:\.\d+)?%/gi,
    /\bknock-?down\s+of\s+\w+\s+(?:inhibits|reduces|blocks)\s+growth\b/gi,
    /\b\w+\s+knock-?down\s+(?:inhibits|reduces|blocks)\s+growth\b/gi,
    /\bgrowth\s+(?:inhibition|reduction|suppression)\s+(?:of|by)\s+\d+(?:\.\d+)?%/gi,
    
    /\bpartial\s+response\b/gi,
    /\bcomplete\s+response\b/gi,
    /\bpartial\s+response\s+in\s+\d+\s+(?:of|out\s+of)\s+\d+/gi,
    /\bone\s+of\s+\d+\s+patients?\s+(?:showed|demonstrated|achieved)\s+(?:partial|complete)\s+response\b/gi,
    /\b\d+\s+(?:of|out\s+of)\s+\d+\s+patients?\s+(?:achieved|showed|demonstrated)\s+(?:partial|complete)\s+response\b/gi,
    /\bresponse\s+rate\s+(?:in|among)\s+\d+\s+patients?\b/gi
];

var precision_regex = [
    /\d+ patients/gi,
    /p-value/gi,
    /\bp\s*(?:<|>|<=|>=|≤|≥|=)\s*0?\.\d+/gi,
    /(?:(?:[$$$$]\s*)?(?:\d+%?\s*)?(?:CI|confidence\s*interval)(?:\s*(?:for|of))?[:\s-]*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*(?:–|-|,|to)\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*(?:[$$$$])?|[$$$$]\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*(?:–|-|,|to)\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*[$$$$])/gi,
    /\b(?<!not\s+)significantly\b/gi,
    /\bsignificantly\s+(?:reduced|increased|decreased|elevated|lowered|improved|worsened|changed)\b/gi,
    /\bsignificant\s+(?:reduction|increase|decrease|elevation|lowering|improvement|worsening|change)\b/gi,
    /\bsignificant\s+effect\b/gi,
    /\bsignificant\s+difference\b/gi,
    /\bsignificant\s+(?:p-?value|p\s+value|pvalue)\b/gi,
    /\bstatistically\s+significant\b/gi,
    /\bstatistical\s+significance\b/gi,

    
];

var units_regex = [
    // Basic units
    /\b\d+(?:\.\d+)?\s*(?:mg|g|kg|ml|l|ul|ng|pg|mm|cm|m|nm|pm|mmol|umol|nmol|pmol|IU|U)\b/gi,
    /\b\d+(?:\.\d+)?\s*%/gi,
    /\b\d+(?:\.\d+)?\s*(?:percent|fold|times?)\b/gi,
    
    // Just the unit names (without numbers)
    /\b(?:mg|g|kg|ml|l|ul|ng|pg|mm|cm|m|nm|pm|mmol|umol|nmol|pmol|IU|U)\b/gi,
    
    // Hazard ratios - both with and without numbers
    /\bHR\b/gi,
    /\bhazard\s+ratio\b/gi,
    /\bHR\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bhazard\s+ratio\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Odds ratios
    /\bOR\b/g,
    /\bodds\s+ratio\b/gi,
    /\bOR\s*[=:]\s*\d+(?:\.\d+)?/g,
    /\bodds\s+ratio\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Relative risks
    /\bRR\b/gi,
    /\brelative\s+risk\b/gi,
    /\bRR\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\brelative\s+risk\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\brisk\s+ratio\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Risk reductions
    /\bRRR\b/gi,
    /\brelative\s+risk\s+reduction\b/gi,
    /\bRRR\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    /\brelative\s+risk\s+reduction\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    /\bARR\b/gi,
    /\babsolute\s+risk\s+reduction\b/gi,
    /\bARR\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    /\babsolute\s+risk\s+reduction\s*[=:]\s*\d+(?:\.\d+)?\s*%/gi,
    
    // Number needed to treat/harm
    /\bNNT\b/gi,
    /\bnumber\s+needed\s+to\s+treat\b/gi,
    /\bNNT\s*[=:]\s*\d+/gi,
    /\bnumber\s+needed\s+to\s+treat\s*[=:]\s*\d+/gi,
    /\bNNH\b/gi,
    /\bnumber\s+needed\s+to\s+harm\b/gi,
    /\bNNH\s*[=:]\s*\d+/gi,
    /\bnumber\s+needed\s+to\s+harm\s*[=:]\s*\d+/gi,
    
    // Clinical rates
    /\bincidence\s+rate\b/gi,
    /\bprevalence\b/gi,
    /\bprevalence\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bmortality\b/gi,
    /\bmortality\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bsurvival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Response/outcome rates
    /\bresponse\s+rate\b/gi,
    /\bresponse\s+rate\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bremission\s+rate\b/gi,
    /\bremission\s+rate\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bprogression[\s-]free\s+survival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\boverall\s+survival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Effect sizes
    /\bCohens?\s+d\b/gi,
    /\beffect\s+size\b/gi,
    /\bSMD\b/gi,
    /\bstandardized\s+mean\s+difference\b/gi,
    /\bCohens?\s+d\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\beffect\s+size\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bSMD\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bstandardized\s+mean\s+difference\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    
    // Correlations
    /\bcorrelation\b/gi,
    /\bcorrelation\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\br\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bR\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\brho\s*[=:]\s*[+-]?\d+(?:\.\d+)?/gi,
    /\bPearson\s+correlation\b/gi,
    /\bSpearman\s+correlation\b/gi,
    
    // Diagnostic accuracy measures
    /\bsensitivity\b/gi,
    /\bsensitivity\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bspecificity\b/gi,
    /\bspecificity\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bpositive\s+predictive\s+value\b/gi,
    /\bnegative\s+predictive\s+value\b/gi,
    /\bAUC\b/gi,
    /\bAUC\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\barea\s+under\s+curve\b/gi,
    
    // Ratios and proportions
    /\b\d+[:]\d+\b/gi,
    /\b\d+(?:\.\d+)?\s*:\s*\d+(?:\.\d+)?\b/gi,
    /\bproportion\b/gi,
    /\bproportion\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bfraction\b/gi,
    /\bfraction\s*[=:]\s*\d+(?:\.\d+)?/gi
];

var comparator_regex = [
    /standard of care/gi,
    /\bSOC\b/gi,
    /\b\w+ (versus|vs|vs.|v|v.) \w+\b/gi,
    /\bcomparator\b/gi,
    /\b(|as) compared (with|to) \w+\b/gi,
    /\bcomparison of \w+\b/gi,
    /\bhead to head\b/gi,
    /\bcomparative study of \w+\b/gi,
    /\brandomi(z|s)ed (to|between) \w+ or \w+\b/gi,
    /\brandomi(z|s)ed between \w+ and \w+\b/gi,
    /\bplacebo\b/gi,
    /\bcontrol(|led)\b/gi,
    /\bcontrol\s+group\b/gi,
    /\btreatment\s+group\b/gi,
    /\bintervention\s+group\b/gi,
    /\bsham\s+\w+\b/gi,
    /\bvehicle\s+\w+\b/gi,
    /\buntreated\b/gi,
    /\bwild\s+type\b/gi,
    /\bbaseline\b/gi,
    /\breference\s+\w+\b/gi,
    /\bcompared (with|to)\b/gi,
    /\bcomparison\b/gi,
    /\bcomparing\b/gi,
    /\brelative\s+to\b/gi,
    /\bin\s+contrast\s+to\b/gi,
    /\bversus\b/gi,
    /\bvs\b/gi,
    /\bagainst\b/gi,
    /\bw(?:as|ere)\s+compared\b/gi,
    /\b(?:when|where)\s+compared\b/gi,
    /\bhigher\s+than\b/gi,
    /\blower\s+than\b/gi,
    /\bgreater\s+than\b/gi,
    /\bless\s+than\b/gi,
    /\bdifferent\s+from\b/gi,
    /\bsimilar\s+to\b/gi,
    
    /\b\d+(?:\.\d+)?%\s+(?:increased|decreased|reduced|elevated|lowered|improved|worsened)\s+expression\b/gi,
    /\b\d+(?:\.\d+)?%\s+(?:increase|decrease|reduction|elevation|lowering|improvement|worsening)\s+in\s+\w+/gi,
    /\b\d+(?:\.\d+)?%\s+(?:higher|lower|greater|smaller)\s+(?:expression|level|amount|concentration)\b/gi,
    /\b\d+(?:\.\d+)?%\s+(?:increase|decrease|reduction|elevation|lowering)\s+(?:compared\s+(?:with|to)\s+)?(?:baseline|control|reference)\b/gi,
    
    /\b(?:led\s+to|resulted\s+in|caused|produced|showed)\s+\d+(?:\.\d+)?%\s+(?:increased|decreased|reduced|elevated|lowered)/gi,
    /\b(?:led\s+to|resulted\s+in|caused|produced|showed)\s+(?:a\s+)?\d+(?:\.\d+)?%\s+(?:increase|decrease|reduction|elevation|lowering)/gi,
    /\b(?:treatment|intervention|drug|compound)\s+led\s+to\s+\d+(?:\.\d+)?%\s+(?:increase|decrease|reduction|elevation|lowering)/gi,
    
    /\b(?:increased|decreased|reduced|elevated|lowered|improved|worsened)\s+by\s+\d+(?:\.\d+)?%/gi,
    /\b\d+(?:\.\d+)?%\s+(?:more|less|higher|lower|greater|smaller)\s+than/gi,
    /\b(?:more|less|higher|lower|greater|smaller)\s+than\s+(?:baseline|control|placebo|reference)/gi,
    
    /\b\d+\s*mg\/kg\s*,\s*compared\s+(?:with|to)/gi,
    /\b(?:infusion|dose|treatment)\s*of\s*[^,^]+,\s*compared\s+(?:with|to)/gi,
    /\bmurine\s+model\s*compared\s+(?:with|to)/gi,
    /\bcompared\s+(?:with|to)\s*(?:a|an|the)\s+\w+\s+model/gi,
    
    /\bIn\s+randomized\s+\w+\s+models?/gi,
    /\brandomized\s+(?:xenograft|murine|animal)\s+(?:tumor|cancer)\s+models?/gi,
    /\bIn\s+(?:randomized|controlled)\s+(?:study|trial|experiment)/gi,
    
    /\b(?:drug|compound|treatment|intervention)\s+\w+\s+led\s+to\s+\d+(?:\.\d+)?%/gi,
    /\b\w+\s+led\s+to\s+\d+(?:\.\d+)?%\s+(?:increased|decreased|reduced|elevated|lowered)/gi,
    /\b\d+(?:\.\d+)?%\s+(?:increase|decrease|reduction|elevation|lowering)\s+of\s+\w+/gi
];

var randomization_regex = [
    /\brandomi(s|z)ed\b/gi,
    /\brandomly\b/gi,
    /\brandomi(s|z)ation\b/gi,
    /\brandom\b/gi,
    /\bRCT\b/gi,
    /\brandomi(z|s)ed\s+(?:controlled|clinical)\s+trial\b/gi,
    /\brandom\s+allocation\b/gi,
    /\brandom\s+assignment\b/gi,
    /\brandomized\s+(?:tumor|cancer)\s+(?:studies?|models?|experiments?)\b/gi,
    /\b(?:were|was|are|is)\s+randomized\b/gi,
    /\brandomized\s+(?:xenograft|preclinical|animal|clinical)\s+studies?\b/gi
];

var masking_regex = [
    /\bblinded\b/gi,
    /\b(double|triple|quadruple)-blind\b/gi,
    /\bmasked\b/gi,
    /\bmasking\b/gi,
    /\bblinding\b/gi,
    /\bsingle-blind\b/gi,
    /\bopen-label\b/gi,
    /\bunblinded\b/gi
];


var preregistration_regex = [
    /\bpre-?registered?\b/gi,
    /\bpre-?registration\b/gi,
    /\bclinicaltrials\.gov\b/gi,
    /\bosf\.io\b/gi,
    /\bregistered\s+(?:protocol|study|trial)\b/gi,
    /\bprospective\s+registration\b/gi,
    /\bregistered\s+before\s+(?:start|beginning|commencement)\b/gi
];

var target_evidence_regex = [
    /\btarget\s+expression\b/gi,
    /\bbiomarker\s+expression\b/gi,
    /\breceptor\s+expression\b/gi,
    /\benzyme\s+expression\b/gi,
    /\bprotein\s+expression\b/gi,
    /\bgene\s+expression\b/gi,
    /\b(present|expressed|detected)\s+in\s+patients?\b/gi,
    /\btarget\s+(?:present|expressed|detected)\b/gi,
    /\bimmunohistochemistry\b/gi,
    /\bwestern\s+blot\b/gi,
    /\bPCR\b/gi,
    /\bqPCR\b/gi,
    /\brt-?PCR\b/gi,
    /\bflow\s+cytometry\b/gi,
    /\belisa\b/gi,
    
    /\bprotein\s+analogue\s+is\s+also\s+found\s+in\s+a\s+murine\s+model\b/gi,
    /\b(?:protein|enzyme|receptor|molecule)\s+analogue\s+is\s+also\s+found\s+in\s+(?:a|the)\s+murine\s+model\b/gi,
    /\b(?:protein|enzyme|receptor|molecule)\s+analogue\s+(?:is|was|were)\s+(?:also\s+)?found\s+in\s+(?:a|the)\s+murine\s+model\b/gi,
    /\bprotein\s+analogue\s+(?:is|was|were)\s+(?:also\s+)?found\s+in\s+murine\s+model\b/gi,
    
    /\b(?:target|biomarker|receptor|enzyme|protein|gene|molecule|analogue)\s+(?:is|are|was|were)\s+also\s+found\s+in\s+(?:human|patient|clinical|murine|animal)\b/gi,
    /\b(?:target|biomarker|receptor|enzyme|protein|gene|molecule|analogue)\s+(?:is|are|was|were)\s+also\s+present\s+in\s+(?:human|patient|clinical|murine|animal)\b/gi,
    /\b(?:target|biomarker|receptor|enzyme|protein|gene|molecule|analogue)\s+(?:is|are|was|were)\s+also\s+detected\s+in\s+(?:human|patient|clinical|murine|animal)\b/gi,
    
    /\b(?:protein|enzyme|receptor|molecule)\s+analogue\s+(?:is|are|was|were)\s+found\s+in\s+(?:a|the)\s+murine\s+model\b/gi,
    /\b(?:protein|enzyme|receptor|molecule)\s+analogue\s+(?:is|are|was|were)\s+present\s+in\s+(?:a|the)\s+murine\s+model\b/gi,
    
    /\b(?:target|biomarker|receptor|enzyme|protein|gene|molecule)\s+(?:is|are|was|were)\s+(?:also\s+)?(?:present|found|detected|expressed|observed|identified|located)\s+in\s+(?:human|patient|clinical|murine|animal)\b/gi,
    /\b(?:present|found|detected|expressed|observed|identified|located)\s+in\s+(?:human|patient|clinical|murine|animal)\s+(?:tissues?|cells?|samples?)\b/gi,
    
    /\b(?:target|biomarker|receptor|enzyme|protein|gene|molecule)\s+(?:is|are|was|were)\s+(?:also\s+)?(?:conserved|shared|similar|common)\s+(?:between|across|in)\s+(?:human|patient|clinical|murine|animal)\s+(?:model|models|tissue|cells|samples?)\b/gi,
    
    /\b(?:target|biomarker|receptor|enzyme|protein|gene|molecule)\s+(?:is|are|was|were)\s+(?:also\s+)?(?:expressed|present|found)\s+(?:in|within)\s+(?:both|either)\s+(?:human|patient|clinical)\s+(?:and|or)\s+(?:murine|animal)\s+(?:model|models|tissue|cells|samples?)\b/gi,
    /\b(?:human|patient|clinical)\s+(?:and|or)\s+(?:murine|animal)\s+(?:model|models|tissue|cells|samples?)\s+(?:both|either)\s+(?:express|contain|have|show)\s+(?:the\s+)?(?:same|similar)\s+(?:target|biomarker|receptor|enzyme|protein|gene|molecule)\b/gi,
    
    /\balso\s+found\s+in\s+(?:a|the)?\s*murine\s+model\b/gi,
    /\balso\s+present\s+in\s+(?:a|the)?\s*murine\s+model\b/gi,
    /\b(?:found|present|detected|expressed|observed|identified|located)\s+(?:also\s+)?in\s+(?:a|the)?\s*murine\s+model\b/gi
];

var construct_validity_regex = [
    /\bconstruct\s+validity\b/gi,
    /\bmodel\s+(?:characteristics|features|properties)\b/gi,
    /\bsimilar\s+(?:pathway|mechanism|process)\b/gi,
    /\bconserved\s+(?:pathway|mechanism)\b/gi,
    /\bhomologous\b/gi,
    /\borthologous\b/gi,
    /\bphenotypically\s+similar\b/gi,
    /\bgenetically\s+similar\b/gi,
    /\bspecies\s+differences?\b/gi,
    /\btranslational\s+relevance\b/gi,
    /\bmodel\s+validation\b/gi,
    /\bsensitive\s+(?:but|while|although|however)\s+not\s+specific\b/gi,
    /\bnot\s+specific\s+(?:but|while|although|however)\s+specific\b/gi,
    /\bspecificity\s+(?:issues|concerns|limitations)\b/gi,
    /\bsensitivity\s+(?:but|while|although|however)\s+specificity\b/gi,
    /\b(?:sensitive|specific)\s+models?\s+(?:for|of)\s+human\s+\w+/gi,
    /\bhuman\s+\w+\s+(?:are|is)\s+w+\s+models?\b/gi,
    /\b\w+-bearing\s+\w+\s+(?:mice|rats|animals)\b/gi,
    /\borthotopic\s+(?:mice|rats|animals|models?)\b/gi,
    /\b(?:are|is)\s+\w+\s+models?\s+(?:for|of)\s+human\b/gi,
    /\bmodels?\s+(?:for|of)\s+human\s+\w+\b/gi,
    /\bmodels?\s+(?:are|is)\s+not\s+specific\s+(?:for|of)\s+human\b/gi,
    /\blimitations?\s+(?:of|in)\s+(?:the\s+)?models?\b/gi,
    /\bmodel\s+limitation\b/gi,
    /\btranslatability\s+limitation\b/gi,
    /\btranslational\s+limitation\b/gi,
    /\b\w+-bearing\s+orthotopic\s+(?:mice|rats|animals)\s+(?:are|is)\s+(?:sensitive|specific)\b/gi,
    /\bhuman\s+\w+\s+(?:are|is)\s+(?:modeled|represented|simulated)\s+(?:by|in)\s+\w+/gi,
    /\b\w+\s+(?:models?|represents|simulates)\s+human\s+\w+\b/gi,
    /\bpredicting\s+human\s+response\b/gi,
    /\bsensitivity\s+but\s+lack\s+of\s+specificity\b/gi,
    /\bhigh\s+sensitivity\s+but\s+low\s+specificity\b/gi,
    /\bpredictive\s+(?:accuracy|value|power)\s+(?:for|of)\s+human\s+response\b/gi,
    /\bmodel\s+(?:prediction|predictive\s+(?:ability|capability|power))\s+(?:for|of)\s+human\s+response\b/gi
];

var external_validity_regex = [
    /\bexternal\s+validity\b/gi,
    /\breplicated?\b/gi,
    /\breproduced?\b/gi,
    /\breplication\b/gi,
    /\breproducibility\b/gi,
    /\bmultiple\s+models?\b/gi,
    /\bdifferent\s+(?:species|strains|cell\s+lines)\b/gi,
    /\bindependent\s+replication\b/gi,
    /\bcross-species\b/gi,
    /\bcross-model\b/gi,
    /\bvalidated\s+in\s+multiple\b/gi,
    /\brobustness\b/gi,
    /\brobust\s+(?:results?|findings?|data|evidence|activity|effect)\b/gi,
    /\b(?:demonstrates|shows|suggests|indicates)\s+robustness\b/gi,
    /\brobustness\s+(?:of|for|in)\s+\w+/gi,
    /\bsuggested\s+by\s+robustness\b/gi,
    /\b(?:activity|effect|results?|findings?)\s+(?:is|are|was|were)\s+robust\b/gi,
    /\bthree\s+different\s+cancer\s+types?\b/gi,
    /\b\d+\s+different\s+cancer\s+types?\b/gi,
    /\bmultiple\s+cancer\s+types?\b/gi,
    /\bvarious\s+cancer\s+types?\b/gi,
    /\bdifferent\s+cancer\s+types?\b/gi,
    /\bcancer\s+type\s+specificity\b/gi,
    /\bcross-?(?:tumor|cancer)\s+(?:activity|effect|efficacy)\b/gi,
    /\b(?:activity|effect|efficacy)\s+(?:across|in|across)\s+multiple\s+cancers?\b/gi,
    /\b(?:anti-?tumor|anti-?cancer)\s+activity\s+(?:across|in)\s+multiple\s+cancer\s+types?\b/gi,
    /\bstudies?\s+of\s+(?:three|multiple|\d+)\s+different\s+(?:cancer\s+types?|tumor\s+types?|models?)\b/gi,
    /\bxenograft\s+studies?\s+(?:of|in|with)\s+(?:three|multiple|\d+)\s+different\s+(?:cancer\s+types?|tumor\s+types?)\b/gi,
    /\brandomized\s+xenograft\s+studies?\b/gi,
    /\bthree\s+different\s+(?:cancer\s+types?|tumor\s+types?|models?)/gi,
    /\brepeated\s+in\s+(?:multiple|three|different)\s+(?:models?|systems?|studies?)\b/gi,
    /\breplicated\s+(?:across|in|through)\s+(?:multiple|three|different)\s+(?:cancer\s+types?|models?)\b/gi,
    /\b(?:consistent|similar)\s+(?:results?|findings?|effects?)\s+(?:across|in)\s+(?:multiple|three|different)\s+(?:cancer\s+types?|models?)\b/gi,

    /\b\w+\s+progression\s+is\s+driven\s+by\s+\w+/gi,
    /\bdriven\s+by\s+\w+\s+(?:over-?activation|hyperactivation|overexpression)\b/gi,
    /\b\w+\s+over-?activation\s+drives\s+\w+\s+progression\b/gi,
    /\b\w+\s+hyperactivation\s+drives\s+\w+\s+progression\b/gi,
    /\bseveral\s+independent\s+studies?\b/gi,
    /\bindependent\s+studies?\s+(?:show|demonstrate|indicate|reveal)\b/gi,
    /\bmultiple\s+independent\s+studies?\s+(?:confirm|support|validate)\b/gi,
    /\bindependent\s+replication\s+of\s+\w+\s+(?:findings|results|effects)\b/gi,
    /\bmultiple\s+cancer\s+types?\s+(?:are|is)\s+driven\s+by\s+\w+/gi,
    /\b\w+\s+over-?activation\s+in\s+(?:multiple|various|different)\s+cancer\s+types?\b/gi,
    /\bcross-?cancer\s+(?:mechanism|pathway|target)\b/gi,
    /\bdoses?\s+(?:of|for)\s+\w+\s+matched\s+those\s+planned\s+(?:for|in)\s+(?:the\s+)?(?:this\s+)?trial\b/gi,
    /\bmatched\s+doses?\b/gi,
    /\bdose\s+matching\b/gi,
    /\b(?:doses?\s+)?(?:were|are)\s+comparable\s+to\s+(?:those\s+)?planned\s+(?:for|in)\s+(?:the\s+)?(?:this\s+)?trial\b/gi,
    /\b(?:doses?\s+)?(?:were|are)\s+equivalent\s+to\s+(?:those\s+)?planned\s+(?:for|in)\s+(?:the\s+)?(?:this\s+)?trial\b/gi
];

var interfering_effects_regex = [
    /\binterfering\s+effects?\b/gi,
    /\bconfounding\s+(?:factor|variable)s?\b/gi,
    /\boff-target\s+effects?\b/gi,
    /\bside\s+effects?\b/gi,
    /\badverse\s+effects?\b/gi,
    /\btoxicity\b/gi,
    /\bno\s+(?:interfering|confounding|adverse)\s+effects?\b/gi,
    /\bwell\s+tolerated\b/gi,
    /\bno\s+significant\s+(?:toxicity|side\s+effects?)\b/gi,
    /\bsafe\s+(?:dose|administration)\b/gi,
    /\bminimal\s+(?:toxicity|side\s+effects?)\b/gi,
    /\bdid\s+not\s+cause\s+any\s+(?:S)?AEs?\b/gi,
    /\bno\s+(?:S)?AEs?\s+(?:were|was)\s+(?:reported|observed|seen|noted|detected)\b/gi,
    /\bsafety\s+profile\s+(?:was|were|is|are)\s+(?:acceptable|favorable|good)\b/gi,
    /\b(?:acceptable|favorable|good)\s+safety\s+profile\b/gi,
    /\bwell\s+tolerated\s+(?:at|with|in)\s+\w+/gi,
    /\bno\s+(?:serious|significant|major)\s+adverse\s+events?\b/gi,
    /\bno\s+(?:dose-limiting|treatment-related)\s+toxicity\b/gi,
    /\bscaled\s+(?:to|for)\s+patients?\b/gi,
    /\b(?:in|with)\s+studies?\s+involving\s+\d+\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\b/gi,
    /\b(?:in|with)\s+\d+\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\s+any\s+(?:adverse|serious|toxic)\s+(?:effects?|events?)\b/gi,
    /\b(?:in|with)\s+\d+\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\s+any\s+(?:S)?AEs?\b/gi,
    /\b(?:studies|trials|research)\s+involving\s+\d+\s+patients?\s*(?:showed|demonstrated|found|reported)\s+(?:good|excellent|acceptable)\s+tolerability\b/gi,
    /\b(?:good|excellent|acceptable)\s+tolerability\s+(?:was|were|is|are)\s+(?:observed|seen|noted|reported|demonstrated)\b/gi,
    /\bno\s+(?:safety|tolerability)\s+(?:concerns|issues|problems)\s+(?:were|was)\s+(?:identified|noted|reported)\b/gi,
    /\babsence\s+of\s+(?:interfering|adverse|toxic|off-target)\s+(?:effects?|events?|toxicity)\b/gi,
    /\b(?:lack|absence)\s+of\s+(?:significant|serious|major)\s+(?:side\s+effects?|adverse\s+events?|toxicity)\b/gi,
    /\b(?:lack|absence)\s+of\s+any\s+(?:S)?AEs?\b/gi,
    /\b(?:did\s+not|didnt)\s+(?:result\s+in|cause|lead\s+to|produce)\s+(?:adverse|toxic|interfering)\s+(?:effects?|events?)\b/gi,
    /\b(?:did\s+not|didnt)\s+(?:result\s+in|cause|lead\s+to|produce)\s+any\s+(?:S)?AEs?\b/gi,
    /\bstudies?\s+in\s+patients?\s*(?:showed|demonstrated|found|reported)\s+(?:no\s+)?(?:significant|serious|major)\s+(?:adverse|toxic)\s+(?:effects?|events?)\b/gi,
    /\bstudies?\s+in\s+patients?\s*(?:showed|demonstrated|found|reported)\s+(?:no\s+)?(?:S)?AEs?\b/gi,
    /\bin\s+clinical\s+(?:studies|trials|practice)\s+(?:did\s+not|didnt)\s+(?:cause|result\s+in)\s+(?:significant|serious)\s+(?:adverse|toxic)\s+(?:effects?|events?)\b/gi,
    /\bin\s+clinical\s+(?:studies|trials|practice)\s+(?:did\s+not|didnt)\s+(?:cause|result\s+in)\s+any\s+(?:S)?AEs?\b/gi,
    /\bno\s+(?:grade\s+[1-5]|grade\s+[IVX]+)\s+(?:adverse\s+events?|AEs?|SAEs?)\b/gi,
    /\b(?:minimal|low|few)\s+(?:adverse\s+events?|AEs?|SAEs?)\b/gi,
    /\bfew\s+(?:adverse\s+events?|AEs?|SAEs?)\s+(?:were|was)\s+(?:reported|observed)\b/gi,
    /\b(?:low|minimal)\s+incidence\s+of\s+(?:adverse\s+events?|AEs?|SAEs?)\b/gi,
    /\b(?:acceptable|manageable)\s+(?:adverse\s+events?|AEs?|SAEs?)\b/gi,
    /\b(?:adverse\s+events?|AEs?|SAEs?)\s+(?:were|was)\s+(?:acceptable|manageable|mild|moderate)\b/gi,
    /\b(?:acceptable|good|excellent)\s+tolerability\b/gi,
    /\b(?:no|minimal|low)\s+(?:toxicity|side\s+effects?|adverse\s+events?|AEs?|SAEs?)\b/gi,
    /\bsafe\s+(?:dose|administration|treatment|therapy)\b/gi,
    /\bwell\s+(?:tolerated|accepted)\s+(?:in|by)\s+patients?\b/gi,

    /\bdoses?\s+(?:used|administered|given)\s+(?:were|was|are|is)\s+tolerable\b/gi,
    /\btolerable\s+doses?\b/gi,
    /\bacceptable\s+tolerability\b/gi,
    /\bgood\s+tolerability\b/gi,
    /\b\d+%\s+of\s+patients?\s+experienced\s+(?:serious|severe|significant)\s+adverse\s+events?\b/gi,
    /\b\d+%\s+of\s+patients?\s+with\s+(?:serious|severe|significant)\s+adverse\s+events?\b/gi,
    /\bserious\s+adverse\s+events?\s+(?:in|among)\s+\d+%\s+of\s+patients?\b/gi,
    /\bsafety\s+profile\s+(?:showed|demonstrated|indicated)\s+\d+%\s+serious\s+adverse\s+events?\b/gi,
    /\badverse\s+event\s+rate\s+(?:of|was)\s+\d+%/gi,
    /\bincidence\s+of\s+serious\s+adverse\s+events?\s+(?:was|were)\s+\d+%/gi
];

var systematic_review_regex = [
    /\bsystematic\s+review\b/gi,
    /\bmeta-analysis\b/gi,
    /\bmeta\s+analysis\b/gi,
    /\bpooled\s+analysis\b/gi,
    /\bliterature\s+review\b/gi,
    /\bcochrane\s+review\b/gi,
    /\bpubmed\s+review\b/gi,
    /\bnarrative\s+review\b/gi,
    /\bcomprehensive\s+review\b/gi,
    /\bevidence\s+synthesis\b/gi,
    /\bpublished\s+review\b/gi
];
