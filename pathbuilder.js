var pathdata = {targetScenario:'', evidence:{}, strength:{}, references:[], version:'1.1.0'};

var ex_pathdata = '{"targetScenario":"Antonib given to glioma patients will improve survival","evidence":{"dbsu56sc5urwhm2e7qkdb21g5nglibwjv68p21i08wy5xau37uxhgrl8iysv8nqq":{"step":"m0m1","text":"Antonib IC50 inhibition of XYZ is 2.2 nM.","number":1},"mzrqby4ahx3mb8e57gfoj4wfl6gwmnwirj159wgak1vhka8xmvlgp8r22c7c3e39":{"step":"m0m1","text":"In randomized xenograft glioma models (see #6 below), Antonib led to 157% lowered expression of a ZIP, a downstream target of XYZ.","number":2},"t0nrkkhvh4avh4ei6ymu8qu4pu4izpatnnvdka3tnpv9o5ilrpsu092lgoqqu36q":{"step":"t1","text":"Antonib crossed the blood brain barrier at a rate that was 20% more efficient than morphine.","number":3},"pnvd0ty6ne02o8xd45cikcivmc7t38plo7t9nwn1bco4rd2f1845bxv78qdg7l9a":{"step":"t1","text":"70% of tumours resected from glioma patients show of XYZ overexpression in blinded pathology studies.","number":4},"md3yuobbk8f8nq6k4fanwaojhs08p2s33q3z7hl5ipnw87t8qjfheq007dnlw56m":{"step":"t1","text":"Doses needed to achieve target inhibition in models, when scaled to patients, did not cause any SAEs in studies involving 20 patients.","number":5},"ig140acrkhehcy6bc0r58us7yp3fn7kzwtzulknwf40wuv99kuk4fp3ytc9zw86n":{"step":"m1m2","text":"Antonib given to 8 of 9 different types of glioma cell lines showed growth inhibition of 60% or more.","number":6},"btf1ktm4hrg9pnfnghxws0j8ibigxryjw584ifbxct87efqrff33bt0r1934bc53":{"step":"m1m2","text":"Randomized studies of Antonib in glioma-bearing orthotopic mice significantly shrank by 50% compared with temazolomide. Results \\twere reproduced three times.","number":7},"0ske55px2fw3to9bam25the8eobxa9gcktgi0oakj4jlbici3a754p9tmisof4i2":{"step":"m1m2","text":"Antonib given to patients with lung or colorectal cancers resulted in ≥ 40% objective response (tumour assessments were blinded).","number":8},"bh9kqyzxxz2w9ludzfsns9hc5xurrgcsokpb3ykb3aao6vefnqkuzqu522i8yao6":{"step":"t2","text":"Glioma-bearing orthotopic mice are sensitive, but not specific models for human glioma. Doses in this study were similar to those planned for this trial","number":9},"edxls0exi034nmjrw7deojk41e5z7vtjpr07vf2124v7y6pingcj0r3hcom46kda":{"step":"t2","text":"Lung and colorectal cancers are driven by XYZ over-activation. Doses used in the above (and present) trial were tolerable (5% of patients experienced serious adverse events)","number":10},"309jabx8zhp0bifob5h6htvrisz7en9mgm3d8gvzowfqu5b1d1xeivhjw40ylifr":{"step":"t2","text":"Glioma progression is driven by XYZ hyperactivation, as indicated by several independent studies showing knock-down of XYZ in glioma cells inhibits growth by 70% (p < .05).","number":11},"mbtzzrwt4ssekfz6yszybxkfwcdj2rnvd4zdk4sn0u1p6rgss6l7j2spnurs48ko":{"step":"t2","text":"Robustness of Antonib anti-tumour activity is suggested by achievement of significantly reduced tumour growth (>50% shrinkage) in randomized xenograft studies of three different cancers types.","number":12},"svau0g7xs8iigi5jjs9zaiuekixerysuifhq1plx7v9dls1ngs541nch8tc9unct":{"step":"m2m3","text":"Antonib significantly doubled survival in randomized, blinded studies of glioma xenograft mice.","number":13},"pcphcuwzlj9pdxrchtsvklk5t2hy9e8tmilsxn5s0l3b9106h1slkp244adicfkx":{"step":"t3","text":"Doses of Antonib in #12 matched those planned for this trial. The model is very sensitive but not very specific for predicting human response.","number":14},"7cvlksk1z7tvu8el2l5z9kgwkmwitemiiervba8my6msxm8k5b8nl2aznoefudz0":{"step":"d0d1","text":"Antonib significantly doubled XYZ phosphorylation in gliomas resected from patients in a phase 0 trial.","number":15},"7z0dju7qpjyzxyohpmytfkx7e70q7g9uomvrwg567x2w3leuoth00qgjzbliry07":{"step":"d1d2","text":"Antonib produced a partial response in one of two glioma patients in a phase 1 trial involving mixed cancers.","number":16},"bp76e7crn459o8fn1mdzb3amfrlf7k8gmhvs4jqgi5hjh7xfi2op47n3yi051xxp":{"step":"d2d3","text":"A meta-analysis of glioma trials showed tumour response was moderately but significantly correlated with increased overall survival (R²=0.4). ","number":17}},"strength":{"d0d1":"4","t1":"4","m0m1":"5","d1d2":"2","t2":"4","m1m2":"5","m2m3":"4","t3":"3","d2d3":"2"},"references":[],"version":"1.1.0"}';

var steps = ["m0m1", "t1", "m1m2", "t2", "m2m3", "t3", "d0d1", "d1d2", "d2d3"];

var prompts = [
    {
	"step":"m0m1",
	"prompt":"What evidence from models suggests that the drug engages and has the desired effect on its molecular target?"
    },
    {
	"step":"m1m2",
	"prompt":"What evidence from models suggests that the drug, once it has engaged with the molecular target, will go on to produce the intended physiological effect?"
    },
    {
	"step":"m2m3",
	"prompt":"What evidence from models suggests that the drug, once it has produced the intended physiological effect, will go on to also produce the desired clinical effect?"
    },{
	"step":"d0d1",
	"prompt":"What direct evidence from clinical studies in the target population suggests that the drug engages and has the desired effect on its molecular target?"
    },
    {
	"step":"d1d2",
	"prompt":"What direct evidence from clinical studies suggests that the drug, once it has engaged with the molecular target, will go on to produce the intended physiological effect in the target population?"
    },
    {
	"step":"d2d3",
	"prompt":"What direct evidence from clinical studies suggests that the drug, once it has produced the intended physiological effect, will go on to also produce the desired clinical effect in the target population?"
    },
    {
	"step":"t1",
	"prompt":"What evidence suggests that the drug target engagement / functional effects in models is recapitulated in the target patients such that evidence of the molecular effect of the drug is relevant to the target population?"
    },
    {
	"step":"t2",
	"prompt":"What evidence suggests that the target system studied in models is recapitulated in humans such that evidence regarding the physiological effect of the drug is relevant to the target population in humans?"
    },
    {
	"step":"t3",
	"prompt":"What evidence suggests that the target system studied in models is recapitulated in humans such that evidence regarding the clinical effect of the drug is relevant to the target population in humans?"
    }
];

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
    
    /\bOR\b/gi,
    /\bodds\s+ratio\b/gi,
    /\bOR\s*[=:]\s*\d+(?:\.\d+)?/gi,
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
    /\bOR\b/gi,
    /\bodds\s+ratio\b/gi,
    /\bOR\s*[=:]\s*\d+(?:\.\d+)?/gi,
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
    /\bsurvival\b/gi,
    /\bsurvival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    
    // Response/outcome rates
    /\bresponse\s+rate\b/gi,
    /\bresponse\s+rate\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bremission\s+rate\b/gi,
    /\bremission\s+rate\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\bprogression[\s-]free\s+survival\b/gi,
    /\bprogression[\s-]free\s+survival\s*[=:]\s*\d+(?:\.\d+)?/gi,
    /\boverall\s+survival\b/gi,
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
    /\brandomized\b/gi,
    /\brandomly\b/gi,
    /\brandomization\b/gi,
    /\brandom\b/gi,
    /\bRCT\b/gi,
    /\brandomi(z|s)ed\s+(?:controlled|clinical)\s+trial\b/gi,
    /\brandom\s+allocation\b/gi,
    /\brandom\s+assignment\b/gi,
    /\block\s+randomi(z|s)ation\b/gi,
    /\bstratified\s+randomi(z|s)ation\b/gi,
    /\brandomized\s+xenograft\s+studies?\b/gi,
    /\brandomized\s+(?:tumor|cancer)\s+(?:studies?|models?|experiments?)\b/gi,
    /\bxenograft\s+studies?\s+(?:were|was|are|is)\s+randomized\b/gi,
    /\bin\s+randomized\s+(?:xenograft|preclinical|animal)\s+studies?\b/gi,

    /\bphase\s+\d+\s+trial\b/gi,
    /\bphase\s+\d+\s+(?:clinical|research)\s+trial\b/gi,
    /\bin\s+phase\s+\d+\s+trial\b/gi,
    /\bphase\s+\d+\s+clinical\s+(?:study|investigation)\b/gi,
    /\bmixed\s+cancers?\b/gi,
    /\bmultiple\s+cancer\s+types?\s+(?:in|within)\s+(?:a\s+)?phase\s+\d+\s+trial\b/gi
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
    /\bhuman\s+\w+\s+(?:are|is)\s+(?:sensitive|specific)\s+models?\b/gi,
    /\b\w+-bearing\s+\w+\s+(?:mice|rats|animals)\b/gi,
    /\borthotopic\s+(?:mice|rats|animals|models?)\b/gi,
    /\b(?:are|is)\s+(?:sensitive|specific)\s+models?\s+(?:for|of)\s+human\b/gi,
    /\bmodels?\s+(?:for|of)\s+human\s+\w+\b/gi,
    /\bmodels?\s+(?:are|is)\s+not\s+specific\s+(?:for|of)\s+human\b/gi,
    /\blimitations?\s+(?:of|in)\s+(?:the\s+)?models?\b/gi,
    /\bmodel\s+limitation\b/gi,
    /\btranslatability\s+limitation\b/gi,
    /\btranslational\s+limitation\b/gi,
    /\b\w+-bearing\s+orthotopic\s+(?:mice|rats|animals)\s+(?:are|is)\s+(?:sensitive|specific)\b/gi,
    /\bhuman\s+\w+\s+(?:are|is)\s+(?:modeled|represented|simulated)\s+(?:by|in)\s+\w+/gi,
    /\b\w+\s+(?:models?|represents|simulates)\s+human\s+\w+\b/gi,
    /\b(?:the\s+)?model\s+is\s+(?:very\s+)?sensitive\s+but\s+(?:not\s+)?(?:very\s+)?specific\b/gi,
    /\bsensitive\s+but\s+not\s+specific\s+for\s+predicting\s+human\s+response\b/gi,
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
    /\b(?:lung|colorectal|breast|prostate|pancreatic|ovarian)\s+(?:and|,)\s+(?:colorectal|lung|breast|prostate|pancreatic|ovarian)\s+cancers?\b/gi,
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
    /\b(?:when|while)\s+scaled\s+(?:to|for)\s+patients?\b/gi,
    /\bscaled\s+(?:to|for)\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\b/gi,
    /\b(?:in|with)\s+studies?\s+involving\s+\d+\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\b/gi,
    /\b(?:in|with)\s+\d+\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\s+any\s+(?:adverse|serious|toxic)\s+(?:effects?|events?)\b/gi,
    /\b(?:in|with)\s+\d+\s+patients?\s*(?:,|and|but)\s+(?:did\s+not|didnt)\s+cause\s+any\s+(?:S)?AEs?\b/gi,
    /\b(?:studies|trials|research)\s+involving\s+\d+\s+patients?\s*(?:showed|demonstrated|found|reported)\s+(?:good|excellent|acceptable)\s+tolerability\b/gi,
    /\b(?:good|excellent|acceptable)\s+tolerability\s+(?:was|were|is|are)\s+(?:observed|seen|noted|reported|demonstrated)\b/gi,
    /\bno\s+(?:safety|tolerability)\s+(?:concerns|issues|problems)\s+(?:were|was)\s+(?:identified|noted|reported)\b/gi,
    /\bdoses?\s+(?:needed|required)\s+to\s+achieve\s+target\s+(?:inhibition|effect)\s*(?:when|while)\s+scaled\s+(?:to|for)\s+patients?\b/gi,
    /\bdose\s+scaling\s+(?:to|for)\s+patients?\s*(?:did\s+not|didnt)\s+(?:result\s+in|cause|lead\s+to)\s+(?:adverse|toxic|serious)\s+(?:effects?|events?)\b/gi,
    /\bdose\s+scaling\s+(?:to|for)\s+patients?\s*(?:did\s+not|didnt)\s+(?:result\s+in|cause|lead\s+to)\s+any\s+(?:S)?AEs?\b/gi,
    /\btherapeutic\s+dose\s+(?:when|while)\s+scaled\s+(?:to|for)\s+patients?\s*(?:was|were)\s+(?:well\s+tolerated|safe|acceptable)\b/gi,
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

function showdialog (dialogname) {
    if (! $('#pagemask').is(':hidden')) { // If the page mask is visible
	$('.dialog').slideUp(0);
    }
    $('#pagemask').fadeIn(250, function () {
	$('#' + dialogname).slideDown();
	$('#' + dialogname + ' textarea,#' + dialogname + ' input').first().focus();
    });
}

function export_pathdata_to_json() {
    const dl = document.createElement("a");
    dl.href = URL.createObjectURL(new Blob([JSON.stringify(pathdata, null, 2)], {
	type: "text/plain"
    }));
    dl.setAttribute("download", "pathdata.json");
    document.body.appendChild(dl);
    dl.click();
    document.body.removeChild(dl);
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function return_unique_matches(text, regexes) {
    var matches = [];
    for (var key in regexes) {
        regex_matches = text.matchAll(regexes[key]);
        for (var regex_match of regex_matches) {
            matches.push(regex_match[0]);
        }
    }
    // Remove duplicates
    return removeDuplicates(matches);
}

function updatepage () {

    // Update target Scenario
    if (pathdata.targetScenario != "") {
	$('#display-target-scenario').html(pathdata.targetScenario);
    } else {
	$('#display-target-scenario').html('No target scenario has been specified')
    }

    // Update counters for evidence
    counter = 1;
    for (var nstep in steps) {
	for (var key in pathdata.evidence) {
	    if (steps[nstep] == pathdata.evidence[key].step) {
		pathdata.evidence[key].number = counter;
		counter++;
	    }
	    
	}
    }
    
    // Insert evidence into text summary area
    $('.evidence-container').html('');
    for (var key in pathdata.evidence) {
	evi = pathdata.evidence[key];
	$('#evidence-block-' + evi['step'] + ' div.evidence-container').append(
	    '<div class="evidence-instance" id="evidence-instance-' + key + '" data-index="' + key + '">' +
	    '<div style="float: right; margin-left: 10px;">' +
	    '<button class="btn btn-sm btn-primary edit-old-evidence" style="margin-right: 10px;">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#pencil"/></svg> Edit' +
	    '</button>' +
	    '<button class="btn btn-sm btn-danger delete-evidence">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#backspace"/></svg> Delete' +
	    '</button>' +
	    '</div>' +
	    '<svg width="20" height="20" class="evidence-instance-grip"><use href="images/bootstrap-icons.svg#arrow-down-up"/></svg>' +
	    evi['number'] + '. ' + evi['text'] +
	    '<div class="evidence-references-section">Reference(s): ' +
	    '<span class="evidence-references-numbers"></span>' +
	    '</div>' +
	    '</div>'
	);
    }

    // Put evidence on the PATH figure and show/hide strength of evidence buttons
    for (var nstep in steps) {
	var step_evidence = [];
	var noevidence = true;
	for (var key in pathdata.evidence) {
	    evi = pathdata.evidence[key];
	    if (steps[nstep] == evi.step) {
		step_evidence.push(evi.number);
		noevidence = false;
	    }
	}
	$('#evidence-' + steps[nstep]).html(step_evidence.join(', '));
	if (noevidence) {
	    $('#evidence-block-' + steps[nstep] + ' button.edit-evidence-strength').fadeOut();
	    $('#arrow-' + steps[nstep]).removeClass('strength1 strength2 strength3 strength4 strength5');
	    $('#arrow-' + steps[nstep]).addClass('strength1');
	} else {
	    $('#evidence-block-' + steps[nstep] + ' button.edit-evidence-strength').fadeIn();
	    if (pathdata.strength.hasOwnProperty(steps[nstep])) { // If the strength of evidence is set for this step
		$('#arrow-' + steps[nstep]).removeClass('strength1 strength2 strength3 strength4 strength5');
		$('#arrow-' + steps[nstep]).addClass('strength' + pathdata.strength[steps[nstep]]);
	    } else {
		$('#arrow-' + steps[nstep]).removeClass('strength1');
	    }
	}
    }

    update_references();

}

function add_new_reference_by_doi (authors, title, journal, year, doi, evidence, doi_field, doi_field_feedback) {
    // Check that there isn't already one with an identical DOI

    ref_already_added = false;
    key_of_potential_dupe = '';
    for (var key in pathdata.references) {
	if (pathdata.references[key].doi == doi) {
	    ref_already_added = true;
	    key_of_potential_dupe = key;
	}
    }

    if (! ref_already_added) {
	if (evidence !== null) {
	    pathdata.references.push({
		authors: authors,
		title: title,
		journal: journal,
		year: year,
		doi: doi,
		published: true, // This will always be true for ones fetched by DOI
		evidence: [evidence]
	    });
	} else {
	    pathdata.references.push({
		authors: authors,
		title: title,
		journal: journal,
		year: year,
		doi: doi,
		published: true, // This will always be true for ones fetched by DOI
		evidence: []
	    });	    
	}

	update_references();

	$('.cancel-add-refs').click();
    } else {
	doi_field.addClass('is-invalid');
	doi_field_feedback.html('A reference with this DOI has already been added');
    }
    
}

function add_new_manual_reference (authors, title, journal, year, url, evidence) {
    // Check that there isn't already one with an identical DOI

    if (evidence !== null) {
	pathdata.references.push({
	    authors: authors,
	    title: title,
	    journal: journal,
	    year: year,
	    url: url,
	    published: false, // This will always be true for ones added manually
	    evidence: [evidence]
	});
    } else {
	pathdata.references.push({
	    authors: authors,
	    title: title,
	    journal: journal,
	    year: year,
	    url: url,
	    published: false, // This will always be true for ones added manually
	    evidence: []
	});	    
    }

    update_references();

    $('.cancel-add-refs').click();
    
}

function update_references () {
    // First, alphabetize by author
    pathdata.references.sort((a, b) => {
	return a.authors.localeCompare(b.authors);
    });

    // Then number the references
    counter = 1;
    for (var key in pathdata.references) {
	pathdata.references[key].number = counter;
	counter++
    }

    // Then add them to the text summary references section
    $('#references-block').find('.references-container').html('');
    for (var key in pathdata.references) {

	ref_in_steps = [];
	for (var ekey in pathdata.references[key].evidence) {
	    ref_in_steps.push(
		evidence_number(pathdata.references[key].evidence[ekey])
	    );
	}
	ref_in_steps.sort();
	refsteps = ref_in_steps.join(', ');

	if (refsteps != '') {
	    refsteps = 'Cited in PATH evidence: ' + refsteps;
	}

	if (pathdata.references[key].authors != '') {
	    authorref = '<span class="references-authors">' +
			pathdata.references[key].authors +
			'.</span> ';
	} else {
	    authorref = '';
	}

	if (pathdata.references[key].title != '') {
	    titleref = '<span class="references-title">' +
		       pathdata.references[key].title +
		       '.</span> ';
	} else {
	    titleref = '';
	}

	if (pathdata.references[key].journal != '') {
	    journalref = '<span class="references-journal">' +
			 pathdata.references[key].journal +
			 '.</span> ';
	} else {
	    journalref = '';
	}

	if (pathdata.references[key].year != '') {
	    yearref = '<span class="references-year">(' +
		      pathdata.references[key].year +
		      ')</span> ';
	} else {
	    yearref = '';
	}

	if (pathdata.references[key].published) {
	    extlink = '<span class="references-doi">DOI: <a href="' +
		      pathdata.references[key].doi +
		      '" target="_blank">' +
		      pathdata.references[key].doi +
		      '</a></span>'
	} else {

	    if (pathdata.references[key].url != '') {
		extlink = '<span class="references-doi">URL: <a href="' +
			  pathdata.references[key].url +
			  '" target="_blank">' +
			  pathdata.references[key].url +
			  '</a></span>'		
	    } else {
		extlink = '';
	    }
	    
	}
	
	$('#references-block').find('.references-container').append(
	    '<div class="reference-instance" data-key="' + key + '"><div>' +
	    '<div style="float: right; margin-left: 10px;"><button class="btn btn-sm btn-danger delete-reference">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#backspace"/></svg> Delete' +
	    '</button></div>' +
	    '<span class="references-number">' +
	    pathdata.references[key].number +
	    '.</span> ' +
	    authorref +
	    titleref +
	    journalref +
	    yearref +
	    extlink +
	    '</div>' +
	    '<div class="ref-path-steps">' +
	    refsteps +
	    '</div>' +
	    '</div>'
	);
    }

    // Then add them to the evidence editor references section
    $('#references-in-editor-block').find('.references-container').html('');
    for (var key in pathdata.references) {

	refchecked = '';
	for (var ekey in pathdata.references[key].evidence) {
	    if ($('#editor-evidence-index').val() == pathdata.references[key].evidence[ekey]) {
		refchecked = ' checked';
	    }
	}

	if (pathdata.references[key].authors != '') {
	    authorref = '<span class="references-authors">' +
			pathdata.references[key].authors +
			'.</span> ';
	} else {
	    authorref = '';
	}
	
	if (pathdata.references[key].title != '') {
	    titleref = '<span class="references-title">' +
		       pathdata.references[key].title +
		       '.</span> ';
	} else {
	    titleref = '';
	}

	if (pathdata.references[key].journal != '') {
	    journalref = '<span class="references-journal">' +
			 pathdata.references[key].journal +
			 '.</span> ';
	} else {
	    journalref = '';
	}

	if (pathdata.references[key].year != '') {
	    yearref = '<span class="references-year">(' +
		      pathdata.references[key].year +
		      ')</span> ';
	} else {
	    yearref = '';
	}

	if (pathdata.references[key].published) {
	    extlink = '<span class="references-doi">DOI: <a href="' +
		      pathdata.references[key].doi +
		      '" target="_blank">' +
		      pathdata.references[key].doi +
		      '</a></span>'
	} else {

	    if (pathdata.references[key].url != '') {
		extlink = '<span class="references-doi">URL: <a href="' +
			  pathdata.references[key].url +
			  '" target="_blank">' +
			  pathdata.references[key].url +
			  '</a></span>'		
	    } else {
		extlink = '';
	    }
	    
	}
	
	$('#references-in-editor-block').find('.references-container').append(
	    '<div class="reference-instance">' +
	    '<label class="d-flex gap-2">' +
	    '<input class="form-check-input flex-shrink-0" type="checkbox" data-refkey="' + key + '" ' + refchecked + '>' +
	    '<span>' +
	    '<span class="references-number">' +
	    pathdata.references[key].number +
	    '.</span> ' +
	    authorref +
	    titleref+
	    journalref+
	    yearref+
	    extlink +
	    '</span></label>' +
	    '</div>'
	);
    }

    // Then add them to the text summary section evidence boxes
    $('.evidence-references-section').slideUp(0);
    $('.evidence-references-number-instance').remove();
    for (var key in pathdata.references) {
	for (var ekey in pathdata.references[key].evidence) {
	    console.log('#evidence-instance-' + pathdata.references[key].evidence[ekey] + ' .evidence-references-numbers');
	    $('#evidence-instance-' + pathdata.references[key].evidence[ekey] + ' .evidence-references-numbers').parent().slideDown(0);
	    $('#evidence-instance-' + pathdata.references[key].evidence[ekey] + ' .evidence-references-numbers').append(
		'<span class="evidence-references-number-instance">' +
		pathdata.references[key].number +
		'</span>'
	    );
	}
    }
    
    
}

function gen_index () {
    generate_another_index = 1;
    while (generate_another_index == 1) {
	// Make a random alphanumeric 64-character string
	length = 64;
	result = '';
	characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	counter = 0;
	while (counter < length) {
	    result += characters.charAt(Math.floor(Math.random() * characters.length));
	    counter += 1;
	}
	// Check that the index isn't already in use before returning
	// result and repeat if it is
	if (! (result in pathdata.evidence)) {
	    generate_another_index = 0;
	}
    }
    return result;
}

function stepname (step) {

    firstletter = step.substring(0, 1);

    if (firstletter == 'm' | firstletter == 'd') {
	// Takes e.g. m0m1 and turns it to M0-M1
	firstpart = step.substring(0, 2);
	secondpart = step.substring(2, 4);
	combined = firstpart + '-' + secondpart;
	return combined.toUpperCase();
    } else {
	// Takes e.g. t1 and turns it to T1
	return step.toUpperCase();
    }
    
}

function steptype (step) {

    firstletter = step.substring(0, 1);

    if (firstletter == 'm' | firstletter == 'd') {
	// It's an M- or D-type step
	return 'vertical';
    } else {
	// It's a T-type step
	return 'horizontal';
    }
    
}

function stepprompt (step) {
    for (var nstep in prompts) {
	if (prompts[nstep].step == step) {
	    return(prompts[nstep].prompt);
	}
    }
}

function return_matches (text, regexes) {
    var matches = [];
    for (var key in regexes) {
	regex_matches = text.matchAll(regexes[key]);
	for (var regex_match of regex_matches) {
	    matches.push(regex_match[0]);
	}
    }
    return(matches);
}

function evidence_number (evidence_key) {
    for (var key in pathdata.evidence) {
	if (key == evidence_key) {
	    return(pathdata.evidence[key].number);
	}
    }
}

async function export_as_svg () {

    const response = await fetch("export-svg.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams ({
            d0d1: $('#evidence-d0d1').html(),
	    d1d2: $('#evidence-d1d2').html(),
	    d2d3: $('#evidence-d2d3').html(),
            m0m1: $('#evidence-m0m1').html(),
	    m1m2: $('#evidence-m1m2').html(),
	    m2m3: $('#evidence-m2m3').html(),
            t1: $('#evidence-t1').html(),
	    t2: $('#evidence-t2').html(),
	    t3: $('#evidence-t3').html(),

	    d0d1_strength: $('#arrow-d0d1').attr("class").replace("path-arrow", ""),
	    d1d2_strength: $('#arrow-d1d2').attr("class").replace("path-arrow", ""),
	    d2d3_strength: $('#arrow-d2d3').attr("class").replace("path-arrow", ""),
	    m0m1_strength: $('#arrow-m0m1').attr("class").replace("path-arrow", ""),
	    m1m2_strength: $('#arrow-m1m2').attr("class").replace("path-arrow", ""),
	    m2m3_strength: $('#arrow-m2m3').attr("class").replace("path-arrow", ""),
	    t1_strength: $('#arrow-t1').attr("class").replace("path-arrow", ""),
	    t2_strength: $('#arrow-t2').attr("class").replace("path-arrow", ""),
	    t3_strength: $('#arrow-t3').attr("class").replace("path-arrow", "")
        })
    });

    if (!response.ok) {
        console.error("SVG download failed");
        return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "path.svg";
    a.click();

    URL.revokeObjectURL(url);
    
}

async function export_as_md () {

    const response = await fetch("export-md.php", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({ pd: pathdata })
    });

    if (!response.ok) {
        console.error("Markdown download failed");
        return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "path.md";
    a.click();

    URL.revokeObjectURL(url);
    
}

async function export_as_docx () {

    const response = await fetch("export-docx.php", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({ pd: pathdata })
    });

    if (!response.ok) {
        console.error("Word download failed");
        return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "path.docx";
    a.click();

    URL.revokeObjectURL(url);
    
}

// Stuff to do when the page is loaded
$(document).ready(function() {

    // Show the startup dialog
    showdialog('startup');

    // Make the evidence draggable
    $('.evidence-container').sortable({
	connectWith: ".evidence-container",
	placeholder: "evidence-placeholder",
	handle: ".evidence-instance-grip",
	stop: function (event, ui) {
	    // Get the order as shown on the page    
	    var indices = $('.evidence-instance').map(function () {
		return $(this).data('index');
	    }).toArray();

	    // Get the data from the JSON object
	    oldevidence = JSON.parse(JSON.stringify(pathdata.evidence));

	    // Clear the old data from the JSON oject
	    pathdata.evidence = {};

	    // Get the step where the item is being dragged
	    targetstep = ui.item.parent().parent().parent().data('step');

	    // Put the old data back but in the new order
	    for (var ind in indices) {
		for (var key in oldevidence) {
		    if (indices[ind] == key) {
			if (key == ui.item.data('index')) {
			    oldevidence[key].step = targetstep;
			}
			pathdata.evidence[key] = oldevidence[key];
		    }
		}
	    }

	    // Remove strength ratings where there is no evidence
	    for (var nstep in steps) {
		var count_evidence = 0;
		for (var key in pathdata.evidence) {
		    if (steps[nstep] == pathdata.evidence[key].step) {
			count_evidence++;
		    }
		}
		if (count_evidence == 0) {
		    delete pathdata.strength[steps[nstep]];
		}
	    }

	    updatepage();
	}
    });

    // Activate the main menu
    $('.titlebar button').on('click', function(event) {
	showdialog('startup');
    });

    // Show save/export buttons
    $('#show-save-options').on('click', function(event) {
	showdialog('save-or-export');
    });
    // Populate the PATH guidances
    for (var guideno in pathguides) {
	// Add buttons to chooser
	$('#path-guide-options-container').append(
	    '<button class="btn btn-primary choose-guide" data-guideno="' + guideno + '">' +
	    pathguides[guideno]['guide_name'] +
	    '</button> '
	);
	// Add pages from guides as dialogs
	for (var pageno in pathguides[guideno]['pages']) {

	    // Put together all the page elements into a string
	    page_elements = '';
	    for (var elementno in pathguides[guideno]['pages'][pageno]['elements']) {
		element_type = pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_type'];
		switch (element_type) {
		    case 'prompt':
			page_elements += '<p class="mb-3">';
			page_elements += pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_details'];
			page_elements += '</p>';
			break;
		    case 'text':
			page_elements += '<div class="mb-3">';
			page_elements += '<label class="form-label" for="' + pathguides[guideno]['pages'][pageno]['elements'][elementno]['path_data_location'] + '">';
			page_elements += pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_details'];
			page_elements += '</label>';
			page_elements += '<textarea id="' + pathguides[guideno]['pages'][pageno]['elements'][elementno]['path_data_location'] + '" class="form-control" rows="3"></textarea>';
			page_elements += '</div>';
			break;
		    case 'check':
			page_elements += '<div class="mb-3 list-group">';
			page_elements += '<label class="list-group-item d-flex gap-2">';
			page_elements += '<input class="form-check-input flex-shrink-0" type="checkbox" value="">';
			page_elements += '<span>' + pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_details'] + '</span>';
			page_elements += '</label>';
			page_elements += '</div>';
			break;
		}
	    }
	    guide_pagination = '<div class="mb-3 text-center">';
	    count_pages_in_guide = 0;
	    for (var pageno2 in pathguides[guideno]['pages']) {
		count_pages_in_guide++;
		if (pageno != pageno2) {
		    guide_pagination += '<button class="btn btn-sm" onclick="showdialog(\'guide-' + guideno + '-' + pathguides[guideno]['pages'][pageno2]['page_no'] + '\');">' + pathguides[guideno]['pages'][pageno2]['page_no'] + '</button> '
		} else {
		    guide_pagination += '<button class="btn btn-sm" disabled>' + pathguides[guideno]['pages'][pageno2]['page_no'] + '</button> '
		}
	    }
	    guide_pagination += '</div>';

	    $('#guidance-pages-container').append(
		'<div class="dialog" id="guide-' + guideno + '-' + pathguides[guideno]['pages'][pageno]['page_no'] + '">' +
		'<button class="btn dialog-close-x dialog-close"><svg width="32" height="32" fill="currentColor"><use href="images/bootstrap-icons.svg#x"/></svg></button>' +
		'<h2>' + pathguides[guideno]['guide_name'] + '</h2>' +
		page_elements +
		guide_pagination +
		'</div>'
	    );
	}
	$('#guidance-pages-container').append(
	    '<div class="dialog">' +
	    '<button class="btn dialog-close-x dialog-close"><svg width="32" height="32" fill="currentColor"><use href="images/bootstrap-icons.svg#x"/></svg></button>' +
	    '</div>'
	);
    }
    $('#path-guide-options-container .choose-guide').on('click', function (event) {
	// Make the choose guide buttons clicky
	console.log($(this).data('guideno'));
	showdialog('guide-' + $(this).data('guideno') + '-' + 1);
    });
    $('').on('click', function(event) {
	// Make the navigation buttons in the guides clicky	
    });
    // End populating the PATH guidances

    // Add functionality for dismissing dialogs
    $('#pagemask, .dialog-close').on('click', function (event) {
	$('.dialog').slideUp(250, function () {
	    $('#pagemask').fadeOut(250);
	});
	$('.cancel-add-refs').click();
    });
    
    // Add functionality for dismissing dialogs with Esc key
    document.addEventListener('keyup', function (event) {
	if (! $('#pagemask').is(':hidden')) { // If the page mask is visible
	    if (event.keyCode == 27) { // Esc key pressed
		$('#pagemask').click(); // Hide all dialogs and page mask
	    }	    
	}
    });

    // Show PATH guidance chooser
    $('#choose-guide').on('click', function(event) {	
	showdialog('guide-chooser');
    });

    // Edit target scenario
    $('#edit-target-scenario').on('click', function(event) {
	showdialog('target-scenario');
	$('#target-scenario-text').val(pathdata.targetScenario);
    });

    // Confirm target scenario changes
    $('#confirm-target-scenario').on('click', function(event) {
	pathdata.targetScenario = $('#target-scenario textarea').val(); // Update the JSON object
	updatepage();
    });

    // Show evidence editor (insert new)
    $('.edit-new-evidence, .path-evidence-box').on('click', function() {
	showdialog('evidence-editor');
	step = $(this).parent().parent().data('step');
	if (typeof step === 'undefined') {
	    step = $(this).data('step');
	}
	newindex = gen_index();
	$('#editor-evidence-index').val(newindex);
	$('#editor-evidence-index-new').val('true');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#evidence-editor-text').val(''); // Clear old text
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']').prop('checked', false); // Clear checkboxes
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
	$('#auto-analysis-report').slideUp();
	update_references();
    });

    // Show evidence editor (edit old)
    $('.evidence-block').on('click', '.edit-old-evidence', function(event) {
	showdialog('evidence-editor');
	step = $(this).parent().parent().parent().parent().parent().data('step');
	index = $(this).parent().parent().data('index');
	$('#editor-evidence-index-new').val('false');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#editor-evidence-index').val(index); // Indicate that it's old evidence
	$('#evidence-editor-text').val(pathdata.evidence[index].text); // Bring back old text
	// Bring back the checks
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']').prop('checked', false); // Clear checkboxes
	if (typeof(pathdata.evidence[index].checks) != 'undefined') {
	    var checks = pathdata.evidence[index].checks;
	} else {
	    var checks = [];
	}
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']').each(function() {
	    if (checks.includes($(this).val())) {
		$(this).prop('checked', true);
	    }
	});
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
	$('#auto-analysis-report').slideUp();
	update_references();
    });

    // Show delete evidence dialog
    $('.evidence-block').on('click', '.delete-evidence', function(event) {
	showdialog('evidence-delete');
	step = $(this).parent().parent().parent().parent().parent().data('step');
	index = $(this).parent().parent().data('index');
	$('.delete-evidence-stepname').html(stepname(step)); // Update user-facing step name in dialog
	$('#delete-evidence-index').val(index); // Indicate index to be deleted
	$('#delete-evidence-text').html(pathdata.evidence[index].text); // Show text for reference
    });

    // Show delete reference dialog
    $('#references-block').on('click', '.delete-reference', function(event) {

	console.log('yes');

	key = $(this).parent().parent().parent().data('key');

	
	if (pathdata.references[key].authors != '') {
	    authorref = '<span class="references-authors">' +
			pathdata.references[key].authors +
			'.</span> ';
	} else {
	    authorref = '';
	}

	if (pathdata.references[key].title != '') {
	    titleref = '<span class="references-title">' +
		       pathdata.references[key].title +
		       '.</span> ';
	} else {
	    titleref = '';
	}

	if (pathdata.references[key].journal != '') {
	    journalref = '<span class="references-journal">' +
			 pathdata.references[key].journal +
			 '.</span> ';
	} else {
	    journalref = '';
	}

	if (pathdata.references[key].year != '') {
	    yearref = '<span class="references-year">(' +
		      pathdata.references[key].year +
		      ')</span> ';
	} else {
	    yearref = '';
	}

	if (pathdata.references[key].published) {
	    extlink = '<span class="references-doi">DOI: <a href="' +
		      pathdata.references[key].doi +
		      '" target="_blank">' +
		      pathdata.references[key].doi +
		      '</a></span>'
	} else {

	    if (pathdata.references[key].url != '') {
		extlink = '<span class="references-doi">URL: <a href="' +
			  pathdata.references[key].url +
			  '" target="_blank">' +
			  pathdata.references[key].url +
			  '</a></span>'		
	    } else {
		extlink = '';
	    }
	    
	}
	
	$('#delete-reference-text').html(
	    '<span class="references-number">' +
	    pathdata.references[key].number +
	    '.</span> ' +
	    authorref +
	    titleref +
	    journalref +
	    yearref +
	    extlink
	);

	$('#delete-reference-key').val(key);
	
	showdialog('reference-delete');
    });

    // Show evidence strength editor
    $('.edit-evidence-strength').on('click', function(event) {
	showdialog('evidence-strength');
	step = $(this).parent().parent().data('step');
	$('#evidence-strength-step').val(step);
	$('.evidence-strength-stepname').html(stepname(step));
	if (pathdata.strength.hasOwnProperty(step)) {
	    $('#evidence-strength-slider').val(pathdata.strength[step]);
	} else {
	    $('#evidence-strength-slider').val(1);	    
	}
	// Enable slider and confirm
	$('#evidence-strength-slider').attr('disabled', false);
	$('#confirm-evidence-strength').attr('disabled', false);
    });

    // Show evidence strength editor (arrow click)
    $('.path-arrow').on('click', function (event) {
	// Check whether there's any evidence
	step = $(this).data('step');
	var count_evidence = 0;
	for (var key in pathdata.evidence) {
	    if (step == pathdata.evidence[key].step) {
		count_evidence ++;
	    }
	}
	if (count_evidence > 0) { // There is evidence for this step
	    showdialog('evidence-strength');
	    $('#evidence-strength-step').val(step);
	    $('.evidence-strength-stepname').html(stepname(step));
	    if (pathdata.strength.hasOwnProperty(step)) {
		$('#evidence-strength-slider').val(pathdata.strength[step]);
	    } else {
		$('#evidence-strength-slider').val(1);	    
	    }
	    // Enable slider and confirm
	    $('#evidence-strength-slider').attr('disabled', false);
	    $('#confirm-evidence-strength').attr('disabled', false);
	} else { // No evidence for this step
	    showdialog('evidence-strength');
	    $('#evidence-strength-step').val(step);
	    $('.evidence-strength-stepname').html(stepname(step));
	    $('#evidence-strength-slider').val(1);
	    // Disable slider and confirm
	    $('#evidence-strength-slider').attr('disabled', true);
	    $('#confirm-evidence-strength').attr('disabled', true);   
	}
	
    });

    // Confirm evidence
    $('#confirm-evidence-editor').on('click', function(event) {
	// Get all the checkboxes
	var checks = [];
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']:checked:visible').each(function () {
	    checks.push($(this).val());
	});
	
	index = $('#editor-evidence-index').val(); // Index for new evidence entry
	if ($('#editor-evidence-index-new').val() == 'true') { // Inserting new evidence
	    if (checks.length > 0) {
		pathdata.evidence[index] = { // Add evidence to JSON object
		    step: $('#editor-evidence-step').val(),
		    text: $('#evidence-editor-text').val(),
		    checks: checks
		};
	    } else {
		pathdata.evidence[index] = { // Add evidence to JSON object
		    step: $('#editor-evidence-step').val(),
		    text: $('#evidence-editor-text').val()
		};
	    }
	} else { // Updating old evidence
	    if (checks.length > 0) {
		pathdata.evidence[index].text = $('#evidence-editor-text').val();
		pathdata.evidence[index].checks = checks;
	    } else {
		index = $('#editor-evidence-index').val();
		pathdata.evidence[index].text = $('#evidence-editor-text').val();
		delete pathdata.evidence[index].checks;
	    }
	}

	// Add the evidence key to all the checked references
	$('#references-in-editor-block .form-check-input').each(function() {
	    if ($(this).is(':checked')) {
		// If it's checked, make sure that the evidence key is is the references array
		if (! pathdata.references[$(this).data('refkey')].evidence.includes(index)) {
		    pathdata.references[$(this).data('refkey')].evidence.push(index);
		}
	    } else {
		if (pathdata.references[$(this).data('refkey')].evidence.includes(index)) {
		    pathdata.references[$(this).data('refkey')].evidence = pathdata.references[$(this).data('refkey')].evidence.filter(i => i !== index);
		}
	    }
	});
	
	updatepage();
    });

    // Confirm delete
    $('#confirm-delete').on('click', function (event) {
	delete pathdata.evidence[$('#delete-evidence-index').val()];
	updatepage()
    });

    // Confirm delete reference
    $('#confirm-delete-ref').on('click', function (event) {
	delete pathdata.references[$('#delete-reference-key').val()];
	updatepage()
    });

    // Confirm strength
    $('#confirm-evidence-strength').on('click', function(event){
	pathdata.strength[$('#evidence-strength-step').val()] = $('#evidence-strength-slider').val();
	updatepage();
    });
    
    // Replace data with example or warn if there's already something there
    $('#view-example').on('click', function(event) {
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    $('.dialog-close-x').click();
	    pathdata = JSON.parse(ex_pathdata);
	    updatepage();
	} else {
	    showdialog('replace-with-example-path');
	}
    });

    // Replace data with example
    $('#confirm-replace-with-example').on('click', function(event) {
	pathdata = JSON.parse(ex_pathdata);
	updatepage();
    });

    // Show file selector and warn if this will replace existing data
    $('#open-json-file').on('click', function (event) {
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    showdialog('open-saved-json-path');
	    $('#open-saved-json-path div.alert').fadeOut();
	} else {
	    showdialog('open-saved-json-path');
	    $('#open-saved-json-path div.alert').fadeIn();
	}
    });

    // Read JSON from disk and replace PATH data in memory
    $('#confirm-replace-with-file-data').on('click', function(event) {
        let fr = new FileReader();
        fr.onload = function () {
	    pathdata = JSON.parse(fr.result);
	    updatepage();
        }
        fr.readAsText(document.getElementById('inputfile').files[0]);
    });

    $('#new-path-from-scratch').on('click', function(event) {
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    $('.dialog-close-x').click();
	} else {
	    showdialog('replace-with-empty-path');
	}
    });

    $('#confirm-replace-with-empty').on('click', function(event) {
	pathdata = {targetScenario:'', evidence:{}, strength:{}, references:[], version:'1.1.0'};
	updatepage();
	$('.path-arrow').removeClass('strength1');
    });

    // Auto-analyze evidence
    $('.auto-analyze-evidence').on('click', function (event) {
	evidence_text = $('#evidence-editor-text').val();
	
	// Clear previous results
	$('#auto-analysis-report').html('').slideUp();
	
	// Get the current step type
	var step = $('#editor-evidence-step').val();
	var step_type = steptype(step);
	
	var report_html = '<div class="auto-analysis-results"><h5>Auto-Analysis Results</h5>';
	var indicators_found = false;
	
	// Function to check if a box is checked but no indicators found
	function checkMissingIndicator(checkboxValue, categoryName, matches, autoCheck = false) {
            var isChecked = $('#evidence-metadata-checkboxes input[value="' + checkboxValue + '"]').is(':checked');
            var hasIndicators = matches && matches.length > 0;
            
            if (autoCheck && hasIndicators) {
		// Auto-check the box if indicators found
		$('#evidence-metadata-checkboxes input[value="' + checkboxValue + '"]').prop('checked', true);
		return { found: true, warning: false };
            }
            
            if (isChecked && !hasIndicators) {
		// Box is checked but no indicators found - warning needed
		return { found: false, warning: true };
            }
            
            if (hasIndicators && !isChecked) {
		// Indicators found but box not checked - auto-check it
		$('#evidence-metadata-checkboxes input[value="' + checkboxValue + '"]').prop('checked', true);
		return { found: true, warning: false };
            }
            
            return { found: hasIndicators, warning: false };
	}
	
	// Always check precision and comparator for vertical steps
	if (step_type == 'vertical') {
            // Precision analysis - USE UNIQUE MATCHES
            var precision_matches = return_unique_matches(evidence_text, precision_regex);
            var precision_result = checkMissingIndicator('measure-precision', 'Precision', precision_matches, true);
            if (precision_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Precision indicators found:</strong><br>';
		for (var key in precision_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + precision_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (precision_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Precision around estimate" box is checked but no precision indicators found in the text. Consider adding p-values, confidence intervals, or statistical measures.</div>';
            }
            
            // Comparator analysis - USE UNIQUE MATCHES
            var comparator_matches = return_unique_matches(evidence_text, comparator_regex);
            var comparator_result = checkMissingIndicator('comparator', 'Comparator', comparator_matches, true);
            if (comparator_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Comparator indicators found:</strong><br>';
		for (var key in comparator_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + comparator_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (comparator_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Comparator" box is checked but no comparator indicators found. Consider adding "compared to", "versus", "placebo", "control group", etc.</div>';
            }
            
            // Randomization analysis - USE UNIQUE MATCHES
            var randomization_matches = return_unique_matches(evidence_text, randomization_regex);
            var randomization_result = checkMissingIndicator('randomization', 'Randomization', randomization_matches, true);
            if (randomization_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Randomization indicators found:</strong><br>';
		for (var key in randomization_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + randomization_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (randomization_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Randomization" box is checked but no randomization indicators found. Consider adding "randomized", "random assignment", "RCT", etc.</div>';
            }
            
            // Masking analysis - USE UNIQUE MATCHES
            var masking_matches = return_unique_matches(evidence_text, masking_regex);
            var masking_result = checkMissingIndicator('masking', 'Masking', masking_matches, true);
            if (masking_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Masking/blinding indicators found:</strong><br>';
		for (var key in masking_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + masking_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (masking_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Masking" box is checked but no masking indicators found. Consider adding "blinded", "masked", "double-blind", etc.</div>';
            }
            
            // Pre-registration analysis - USE UNIQUE MATCHES
            var preregistration_matches = return_unique_matches(evidence_text, preregistration_regex);
            var preregistration_result = checkMissingIndicator('pre-registration', 'Pre-registration', preregistration_matches, true);
            if (preregistration_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Pre-registration indicators found:</strong><br>';
		for (var key in preregistration_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + preregistration_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (preregistration_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Pre-registration" box is checked but no pre-registration indicators found. Consider adding "pre-registered", "clinicaltrials.gov", "registered protocol", etc.</div>';
            }
            
            // Magnitude of effect analysis - USE UNIQUE MATCHES
            var magnitude_matches = return_unique_matches(evidence_text, magnitude_regex);
            var magnitude_result = checkMissingIndicator('magnitude-of-effect', 'Magnitude of effect', magnitude_matches, true);
            if (magnitude_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Magnitude of effect indicators found:</strong><br>';
		for (var key in magnitude_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + magnitude_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (magnitude_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Magnitude of effect" box is checked but no magnitude indicators found. Consider adding effect sizes, HR/OR/RR values, or percentage changes.</div>';
            }
            
            // Units provided analysis - USE UNIQUE MATCHES
            var units_matches = return_unique_matches(evidence_text, units_regex);
            var units_result = checkMissingIndicator('units-provided', 'Units provided', units_matches, true);
            if (units_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Units provided indicators found:</strong><br>';
		for (var key in units_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + units_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (units_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Units provided" box is checked but no unit indicators found. Consider adding measurement units (mg, mL, %), statistical measures (HR, OR), or time units.</div>';
            }
            
	} else if (step_type == 'horizontal') {
            // Horizontal step analyses - ALL USE UNIQUE MATCHES
            
            // Target evidence analysis
            var target_matches = return_unique_matches(evidence_text, target_evidence_regex);
            var target_result = checkMissingIndicator('target-present', 'Target evidence', target_matches, true);
            if (target_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Target evidence indicators found:</strong><br>';
		for (var key in target_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + target_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (target_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Target evidence" box is checked but no target indicators found. Consider adding "target expression", "biomarker present", "receptor expressed", etc.</div>';
            }
            
            // Construct validity analysis
            var construct_matches = return_unique_matches(evidence_text, construct_validity_regex);
            var construct_result = checkMissingIndicator('construct-validity', 'Construct validity', construct_matches, true);
            if (construct_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Construct validity indicators found:</strong><br>';
		for (var key in construct_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + construct_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (construct_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Construct validity" box is checked but no construct validity indicators found. Consider adding "construct validity", "similar mechanism", "conserved pathway", "model validation", etc.</div>';
            }
            
            // External validity analysis
            var external_matches = return_unique_matches(evidence_text, external_validity_regex);
            var external_result = checkMissingIndicator('external-validity', 'External validity', external_matches, true);
            if (external_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>External validity indicators found:</strong><br>';
		for (var key in external_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + external_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (external_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "External validity" box is checked but no external validity indicators found. Consider adding "replicated", "multiple models", "cross-species", "independent validation", etc.</div>';
            }
            
            // Interfering effects analysis
            var interfering_matches = return_unique_matches(evidence_text, interfering_effects_regex);
            var interfering_result = checkMissingIndicator('interfering-effects', 'Interfering effects', interfering_matches, true);
            if (interfering_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Interfering effects indicators found:</strong><br>';
		for (var key in interfering_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + interfering_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (interfering_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Interfering effects" box is checked but no interfering effects indicators found. Consider adding "no interfering effects", "well-tolerated", "no confounding factors", "no adverse effects", etc.</div>';
            }
            
            // Systematic review analysis
            var systematic_matches = return_unique_matches(evidence_text, systematic_review_regex);
            var systematic_result = checkMissingIndicator('systematic-review', 'Systematic review', systematic_matches, true);
            if (systematic_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Systematic review indicators found:</strong><br>';
		for (var key in systematic_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + systematic_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (systematic_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Systematic review" box is checked but no systematic review indicators found. Consider adding "systematic review", "meta-analysis", "literature review", "evidence synthesis", etc.</div>';
            }
	}
	
	report_html += '</div>';
	
	if (indicators_found) {
            $('#auto-analysis-report').html(report_html).slideDown();
	} else {
            // Enhanced feedback when no indicators are found
            var step_name = stepname(step);
            var feedback_message = '<div class="alert alert-info">';
            feedback_message += '<h6>No specific evidence indicators found</h6>';
            feedback_message += '<p class="mb-2">The auto-analysis didn\'t detect any specific patterns for <strong>' + step_name + '</strong>.</p>';
            
            // Add specific suggestions based on step type
            if (step_type == 'vertical') {
		feedback_message += '<p class="mb-1"><strong>Suggestions for ' + step_name + ':</strong></p>';
		feedback_message += '<ul class="mb-2">';
		feedback_message += '<li>Include specific numbers with units (e.g., "20 mg/kg", "50% reduction")</li>';
		feedback_message += '<li>Add statistical measures (e.g., "HR = 0.75", "p < 0.05", "95% CI: 0.6-0.9")</li>';
		feedback_message += '<li>Mention comparators (e.g., "compared to placebo", "versus control group")</li>';
		feedback_message += '<li>Include study design details (e.g., "randomized", "blinded", "pre-registered")</li>';
		feedback_message += '</ul>';
            } else if (step_type == 'horizontal') {
		feedback_message += '<p class="mb-1"><strong>Suggestions for ' + step_name + ':</strong></p>';
		feedback_message += '<ul class="mb-2">';
		feedback_message += '<li>Mention target/biomarker expression in patients (e.g., "target present in 70% of tumors")</li>';
		feedback_message += '<li>Describe model validity (e.g., "similar mechanism", "conserved pathway")</li>';
		feedback_message += '<li>Include replication evidence (e.g., "replicated in multiple models", "external validation")</li>';
		feedback_message += '<li>Address potential confounders (e.g., "no interfering effects", "well-tolerated")</li>';
		feedback_message += '<li>Reference systematic reviews (e.g., "systematic review shows", "meta-analysis found")</li>';
		feedback_message += '</ul>';
            }
            
            feedback_message += '<p class="mb-0"><small>You can still save this evidence and manually check the relevant boxes below.</small></p>';
            feedback_message += '</div>';
            
            $('#auto-analysis-report').html(feedback_message).slideDown();
	}
    }); // End of auto-analyze evidence

    $('.edit-new-reference-doi').on('click', function(event) {
	$(this).parent().children('.add-refs-buttons').slideUp();
	$(this).parent().children('.add-ref-by-doi').slideDown();
    });

    $('.edit-new-reference-manual').on('click', function(event) {
	$(this).parent().children('.add-refs-buttons').slideUp();
	$(this).parent().children('.add-ref-manual').slideDown();
    });

    $('.cancel-add-refs').on('click', function(event) {
	$(this).parent().parent().children('.add-ref-space').slideUp();
	$(this).parent().parent().children('.add-refs-buttons').slideDown();
	$(this).parent().find('.doi-to-look-up').val('');
	$(this).parent().find('.doi-to-look-up').removeClass('is-invalid');
	$(this).parent().find('.doi-to-look-up-feedback').html('');
	$(this).parent().parent().find('.add-ref-manual input').val('');
    });

    $('.do-doi-lookup').on('click', function (event) {

	doi_field = $(this).parent().find('.doi-to-look-up');
	doi_field_feedback = $(this).parent().find('.doi-to-look-up-feedback');
	doi_to_look_up = doi_field.val();
	if ($('#evidence-editor').is(":visible")) {
	    index = $('#editor-evidence-index').val();
	} else {
	    index = null;
	}

	if (doi_to_look_up != '') {
	    
	    $.ajax ({
		url: 'crossref.php',
		type: 'post',
		data: {
		    doi: doi_to_look_up
		},
		dataType: 'html'
	    }).done ( function (response) {
		response_json = JSON.parse(response);

		if (response_json.status == "success") {
		    add_new_reference_by_doi(
			response_json.authors,
			response_json.title,
			response_json.journal,
			response_json.year,
			response_json.doi,
			index,
			doi_field,
			doi_field_feedback
		    );
		} else {
		    // What to do in case of error
		    doi_field.addClass('is-invalid');
		    doi_field_feedback.html('Failure to look up provided DOI');
		}
		
	    });
	    
	} else {
	    doi_field.addClass('is-invalid');
	    doi_field_feedback.html('Please enter a DOI');
	}

    });

    $('.add-manual-reference').on('click', function (event) {

	authors_field = $(this).parent().find('.manual-ref-authors');
	title_field = $(this).parent().find('.manual-ref-title');
	journal_field = $(this).parent().find('.manual-ref-journal');
	year_field = $(this).parent().find('.manual-ref-year');
	url_field = $(this).parent().find('.manual-ref-url');

	if ($('#evidence-editor').is(":visible")) {
	    index = $('#editor-evidence-index').val();
	} else {
	    index = null;
	}
	
	add_new_manual_reference(
	    authors_field.val(),
	    title_field.val(),
	    journal_field.val(),
	    year_field.val(),
	    url_field.val(),
	    index
	);
	
    });
    
});
