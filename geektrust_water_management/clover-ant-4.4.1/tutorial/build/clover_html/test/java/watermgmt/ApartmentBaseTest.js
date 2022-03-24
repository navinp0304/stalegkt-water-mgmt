var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":279,"id":768,"methods":[{"el":19,"sc":2,"sl":15},{"el":30,"sc":2,"sl":21},{"el":72,"sc":2,"sl":33},{"el":77,"sc":2,"sl":74},{"el":82,"sc":2,"sl":79},{"el":94,"sc":2,"sl":84},{"el":120,"sc":2,"sl":96},{"el":157,"sc":2,"sl":122},{"el":184,"sc":2,"sl":159},{"el":190,"sc":2,"sl":186},{"el":196,"sc":2,"sl":192},{"el":202,"sc":2,"sl":198},{"el":237,"sc":2,"sl":204},{"el":246,"sc":2,"sl":239},{"el":255,"sc":2,"sl":248},{"el":269,"sc":2,"sl":257},{"el":277,"sc":2,"sl":271}],"name":"ApartmentBaseTest","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":257}],"name":"testGetTotalLitres","pass":true,"statements":[{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":264},{"sl":265},{"sl":266},{"sl":267}]},"test_12":{"methods":[{"sl":248}],"name":"testGetRatioStr","pass":true,"statements":[{"sl":250},{"sl":251},{"sl":252},{"sl":253}]},"test_13":{"methods":[{"sl":74}],"name":"testApartmentBaseIntegerIntegerString","pass":true,"statements":[]},"test_26":{"methods":[{"sl":96}],"name":"testClone","pass":true,"statements":[{"sl":98},{"sl":99},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119}]},"test_28":{"methods":[{"sl":271}],"name":"testCheckValidType","pass":true,"statements":[{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_29":{"methods":[{"sl":204}],"name":"testAddPeople","pass":true,"statements":[{"sl":206},{"sl":207},{"sl":208},{"sl":210},{"sl":211},{"sl":212},{"sl":214},{"sl":215},{"sl":216},{"sl":218},{"sl":219},{"sl":220},{"sl":222},{"sl":223},{"sl":224},{"sl":226},{"sl":227},{"sl":228},{"sl":230},{"sl":231},{"sl":232},{"sl":234},{"sl":235},{"sl":236}]},"test_33":{"methods":[{"sl":33}],"name":"testApartmentBaseIntegerInteger","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":39},{"sl":42},{"sl":43},{"sl":45},{"sl":48},{"sl":49},{"sl":51},{"sl":54},{"sl":55},{"sl":57},{"sl":60},{"sl":61},{"sl":63},{"sl":66},{"sl":67},{"sl":69}]},"test_34":{"methods":[{"sl":198}],"name":"testGetDefaultPeople","pass":true,"statements":[{"sl":200},{"sl":201}]},"test_41":{"methods":[{"sl":84}],"name":"testGetDefaultLitres","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":93}]},"test_42":{"methods":[{"sl":122}],"name":"testGetCost","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":132},{"sl":134},{"sl":135},{"sl":136},{"sl":138},{"sl":139},{"sl":140},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156}]},"test_43":{"methods":[{"sl":239}],"name":"testGetRatio","pass":true,"statements":[{"sl":241},{"sl":242},{"sl":243},{"sl":244}]},"test_45":{"methods":[{"sl":159}],"name":"testEqualsObject","pass":true,"statements":[{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":181}]},"test_46":{"methods":[{"sl":186}],"name":"testGetDaysMonth","pass":true,"statements":[{"sl":188},{"sl":189}]},"test_5":{"methods":[{"sl":21}],"name":"testHashCode","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":25},{"sl":27},{"sl":28},{"sl":29}]},"test_50":{"methods":[{"sl":79}],"name":"testApartmentBaseIntegerIntegerDouble","pass":true,"statements":[]},"test_8":{"methods":[{"sl":192}],"name":"testGetLitresPerson","pass":true,"statements":[{"sl":194},{"sl":195}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [5], [], [5], [5], [5], [], [5], [5], [5], [], [], [], [33], [], [], [33], [33], [], [33], [], [], [33], [33], [], [33], [], [], [33], [33], [], [33], [], [], [33], [33], [], [33], [], [], [33], [33], [], [33], [], [], [33], [33], [], [33], [], [], [], [], [13], [], [], [], [], [50], [], [], [], [], [41], [], [41], [41], [], [41], [41], [], [41], [41], [], [], [26], [], [26], [26], [], [26], [26], [], [26], [26], [26], [], [26], [26], [26], [], [26], [26], [], [26], [26], [], [26], [26], [], [], [42], [], [42], [42], [42], [42], [42], [], [42], [42], [42], [], [42], [42], [42], [], [42], [42], [42], [], [42], [42], [42], [], [42], [42], [42], [], [42], [42], [42], [], [42], [42], [42], [], [], [45], [], [45], [45], [45], [45], [45], [45], [], [45], [45], [], [45], [], [45], [45], [], [45], [], [45], [45], [], [45], [], [], [], [], [46], [], [46], [46], [], [], [8], [], [8], [8], [], [], [34], [], [34], [34], [], [], [29], [], [29], [29], [29], [], [29], [29], [29], [], [29], [29], [29], [], [29], [29], [29], [], [29], [29], [29], [], [29], [29], [29], [], [29], [29], [29], [], [29], [29], [29], [], [], [43], [], [43], [43], [43], [43], [], [], [], [12], [], [12], [12], [12], [12], [], [], [], [11], [], [11], [11], [11], [11], [], [11], [11], [11], [11], [], [], [], [28], [], [28], [28], [28], [28], [], [], []]
