/* (c) broowserools 2020 */

var unicodeLetters = {
  "white-circled": {
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
    A: "Ⓐ",
    B: "Ⓑ",
    C: "Ⓒ",
    D: "Ⓓ",
    E: "Ⓔ",
    F: "Ⓕ",
    G: "Ⓖ",
    H: "Ⓗ",
    I: "Ⓘ",
    J: "Ⓙ",
    K: "Ⓚ",
    L: "Ⓛ",
    M: "Ⓜ",
    N: "Ⓝ",
    O: "Ⓞ",
    P: "Ⓟ",
    Q: "Ⓠ",
    R: "Ⓡ",
    S: "Ⓢ",
    T: "Ⓣ",
    U: "Ⓤ",
    V: "Ⓥ",
    W: "Ⓦ",
    X: "Ⓧ",
    Y: "Ⓨ",
    Z: "Ⓩ",
  },
  "black-circled": {
    A: "🅐",
    B: "🅑",
    C: "🅒",
    D: "🅓",
    E: "🅔",
    F: "🅕",
    G: "🅖",
    H: "🅗",
    I: "🅘",
    J: "🅙",
    K: "🅚",
    L: "🅛",
    M: "🅜",
    N: "🅝",
    O: "🅞",
    P: "🅟",
    Q: "🅠",
    R: "🅡",
    S: "🅢",
    T: "🅣",
    U: "🅤",
    V: "🅥",
    W: "🅦",
    X: "🅧",
    Y: "🅨",
    Z: "🅩",
  },
  fullwidth: {
    a: "ａ",
    b: "ｂ",
    c: "ｃ",
    d: "ｄ",
    e: "ｅ",
    f: "ｆ",
    g: "ｇ",
    h: "ｈ",
    i: "ｉ",
    j: "ｊ",
    k: "ｋ",
    l: "ｌ",
    m: "ｍ",
    n: "ｎ",
    o: "ｏ",
    p: "ｐ",
    q: "ｑ",
    r: "ｒ",
    s: "ｓ",
    t: "ｔ",
    u: "ｕ",
    v: "ｖ",
    w: "ｗ",
    x: "ｘ",
    y: "ｙ",
    z: "ｚ",
    A: "Ａ",
    B: "Ｂ",
    C: "Ｃ",
    D: "Ｄ",
    E: "Ｅ",
    F: "Ｆ",
    G: "Ｇ",
    H: "Ｈ",
    I: "Ｉ",
    J: "Ｊ",
    K: "Ｋ",
    L: "Ｌ",
    M: "Ｍ",
    N: "Ｎ",
    O: "Ｏ",
    P: "Ｐ",
    Q: "Ｑ",
    R: "Ｒ",
    S: "Ｓ",
    T: "Ｔ",
    U: "Ｕ",
    V: "Ｖ",
    W: "Ｗ",
    X: "Ｘ",
    Y: "Ｙ",
    Z: "Ｚ",
  },
  bold: {
    a: "𝐚",
    b: "𝐛",
    c: "𝐜",
    d: "𝐝",
    e: "𝐞",
    f: "𝐟",
    g: "𝐠",
    h: "𝐡",
    i: "𝐢",
    j: "𝐣",
    k: "𝐤",
    l: "𝐥",
    m: "𝐦",
    n: "𝐧",
    o: "𝐨",
    p: "𝐩",
    q: "𝐪",
    r: "𝐫",
    s: "𝐬",
    t: "𝐭",
    u: "𝐮",
    v: "𝐯",
    w: "𝐰",
    x: "𝐱",
    y: "𝐲",
    z: "𝐳",
    A: "𝐀",
    B: "𝐁",
    C: "𝐂",
    D: "𝐃",
    E: "𝐄",
    F: "𝐅",
    G: "𝐆",
    H: "𝐇",
    I: "𝐈",
    J: "𝐉",
    K: "𝐊",
    L: "𝐋",
    M: "𝐌",
    N: "𝐍",
    O: "𝐎",
    P: "𝐏",
    Q: "𝐐",
    R: "𝐑",
    S: "𝐒",
    T: "𝐓",
    U: "𝐔",
    V: "𝐕",
    W: "𝐖",
    X: "𝐗",
    Y: "𝐘",
    Z: "𝐙",
  },
  "bold-fraktur": {
    a: "𝖆",
    b: "𝖇",
    c: "𝖈",
    d: "𝖉",
    e: "𝖊",
    f: "𝖋",
    g: "𝖌",
    h: "𝖍",
    i: "𝖎",
    j: "𝖏",
    k: "𝖐",
    l: "𝖑",
    m: "𝖒",
    n: "𝖓",
    o: "𝖔",
    p: "𝖕",
    q: "𝖖",
    r: "𝖗",
    s: "𝖘",
    t: "𝖙",
    u: "𝖚",
    v: "𝖛",
    w: "𝖜",
    x: "𝖝",
    y: "𝖞",
    z: "𝖟",
    A: "𝕬",
    B: "𝕭",
    C: "𝕮",
    D: "𝕯",
    E: "𝕰",
    F: "𝕱",
    G: "𝕲",
    H: "𝕳",
    I: "𝕴",
    J: "𝕵",
    K: "𝕶",
    L: "𝕷",
    M: "𝕸",
    N: "𝕹",
    O: "𝕺",
    P: "𝕻",
    Q: "𝕼",
    R: "𝕽",
    S: "𝕾",
    T: "𝕿",
    U: "𝖀",
    V: "𝖁",
    W: "𝖂",
    X: "𝖃",
    Y: "𝖄",
    Z: "𝖅",
  },
  "bold-italic": {
    a: "𝒂",
    b: "𝒃",
    c: "𝒄",
    d: "𝒅",
    e: "𝒆",
    f: "𝒇",
    g: "𝒈",
    h: "𝒉",
    i: "𝒊",
    j: "𝒋",
    k: "𝒌",
    l: "𝒍",
    m: "𝒎",
    n: "𝒏",
    o: "𝒐",
    p: "𝒑",
    q: "𝒒",
    r: "𝒓",
    s: "𝒔",
    t: "𝒕",
    u: "𝒖",
    v: "𝒗",
    w: "𝒘",
    x: "𝒙",
    y: "𝒚",
    z: "𝒛",
    A: "𝑨",
    B: "𝑩",
    C: "𝑪",
    D: "𝑫",
    E: "𝑬",
    F: "𝑭",
    G: "𝑮",
    H: "𝑯",
    I: "𝑰",
    J: "𝑱",
    K: "𝑲",
    L: "𝑳",
    M: "𝑴",
    N: "𝑵",
    O: "𝑶",
    P: "𝑷",
    Q: "𝑸",
    R: "𝑹",
    S: "𝑺",
    T: "𝑻",
    U: "𝑼",
    V: "𝑽",
    W: "𝑾",
    X: "𝑿",
    Y: "𝒀",
    Z: "𝒁",
  },
  "bold-script": {
    a: "𝓪",
    b: "𝓫",
    c: "𝓬",
    d: "𝓭",
    e: "𝓮",
    f: "𝓯",
    g: "𝓰",
    h: "𝓱",
    i: "𝓲",
    j: "𝓳",
    k: "𝓴",
    l: "𝓵",
    m: "𝓶",
    n: "𝓷",
    o: "𝓸",
    p: "𝓹",
    q: "𝓺",
    r: "𝓻",
    s: "𝓼",
    t: "𝓽",
    u: "𝓾",
    v: "𝓿",
    w: "𝔀",
    x: "𝔁",
    y: "𝔂",
    z: "𝔃",
    A: "𝓐",
    B: "𝓑",
    C: "𝓒",
    D: "𝓓",
    E: "𝓔",
    F: "𝓕",
    G: "𝓖",
    H: "𝓗",
    I: "𝓘",
    J: "𝓙",
    K: "𝓚",
    L: "𝓛",
    M: "𝓜",
    N: "𝓝",
    O: "𝓞",
    P: "𝓟",
    Q: "𝓠",
    R: "𝓡",
    S: "𝓢",
    T: "𝓣",
    U: "𝓤",
    V: "𝓥",
    W: "𝓦",
    X: "𝓧",
    Y: "𝓨",
    Z: "𝓩",
  },
  "double-struck": {
    a: "𝕒",
    b: "𝕓",
    c: "𝕔",
    d: "𝕕",
    e: "𝕖",
    f: "𝕗",
    g: "𝕘",
    h: "𝕙",
    i: "𝕚",
    j: "𝕛",
    k: "𝕜",
    l: "𝕝",
    m: "𝕞",
    n: "𝕟",
    o: "𝕠",
    p: "𝕡",
    q: "𝕢",
    r: "𝕣",
    s: "𝕤",
    t: "𝕥",
    u: "𝕦",
    v: "𝕧",
    w: "𝕨",
    x: "𝕩",
    y: "𝕪",
    z: "𝕫",
    A: "𝔸",
    B: "𝔹",
    C: "ℂ",
    D: "𝔻",
    E: "𝔼",
    F: "𝔽",
    G: "𝔾",
    H: "ℍ",
    I: "𝕀",
    J: "𝕁",
    K: "𝕂",
    L: "𝕃",
    M: "𝕄",
    N: "ℕ",
    O: "𝕆",
    P: "ℙ",
    Q: "ℚ",
    R: "ℝ",
    S: "𝕊",
    T: "𝕋",
    U: "𝕌",
    V: "𝕍",
    W: "𝕎",
    X: "𝕏",
    Y: "𝕐",
    Z: "ℤ",
  },
  monospace: {
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚",
    r: "𝚛",
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
    A: "𝙰",
    B: "𝙱",
    C: "𝙲",
    D: "𝙳",
    E: "𝙴",
    F: "𝙵",
    G: "𝙶",
    H: "𝙷",
    I: "𝙸",
    J: "𝙹",
    K: "𝙺",
    L: "𝙻",
    M: "𝙼",
    N: "𝙽",
    O: "𝙾",
    P: "𝙿",
    Q: "𝚀",
    R: "𝚁",
    S: "𝚂",
    T: "𝚃",
    U: "𝚄",
    V: "𝚅",
    W: "𝚆",
    X: "𝚇",
    Y: "𝚈",
    Z: "𝚉",
  },
  "sans-serif": {
    a: "𝖺",
    b: "𝖻",
    c: "𝖼",
    d: "𝖽",
    e: "𝖾",
    f: "𝖿",
    g: "𝗀",
    h: "𝗁",
    i: "𝗂",
    j: "𝗃",
    k: "𝗄",
    l: "𝗅",
    m: "𝗆",
    n: "𝗇",
    o: "𝗈",
    p: "𝗉",
    q: "𝗊",
    r: "𝗋",
    s: "𝗌",
    t: "𝗍",
    u: "𝗎",
    v: "𝗏",
    w: "𝗐",
    x: "𝗑",
    y: "𝗒",
    z: "𝗓",
    A: "𝖠",
    B: "𝖡",
    C: "𝖢",
    D: "𝖣",
    E: "𝖤",
    F: "𝖥",
    G: "𝖦",
    H: "𝖧",
    I: "𝖨",
    J: "𝖩",
    K: "𝖪",
    L: "𝖫",
    M: "𝖬",
    N: "𝖭",
    O: "𝖮",
    P: "𝖯",
    Q: "𝖰",
    R: "𝖱",
    S: "𝖲",
    T: "𝖳",
    U: "𝖴",
    V: "𝖵",
    W: "𝖶",
    X: "𝖷",
    Y: "𝖸",
    Z: "𝖹",
  },
  "sans-serif-bold": {
    a: "𝗮",
    b: "𝗯",
    c: "𝗰",
    d: "𝗱",
    e: "𝗲",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "𝗸",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗽",
    q: "𝗾",
    r: "𝗿",
    s: "𝘀",
    t: "𝘁",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "𝘆",
    z: "𝘇",
    A: "𝗔",
    B: "𝗕",
    C: "𝗖",
    D: "𝗗",
    E: "𝗘",
    F: "𝗙",
    G: "𝗚",
    H: "𝗛",
    I: "𝗜",
    J: "𝗝",
    K: "𝗞",
    L: "𝗟",
    M: "𝗠",
    N: "𝗡",
    O: "𝗢",
    P: "𝗣",
    Q: "𝗤",
    R: "𝗥",
    S: "𝗦",
    T: "𝗧",
    U: "𝗨",
    V: "𝗩",
    W: "𝗪",
    X: "𝗫",
    Y: "𝗬",
    Z: "𝗭",
  },
  "sans-serif-bold-italic": {
    a: "𝙖",
    b: "𝙗",
    c: "𝙘",
    d: "𝙙",
    e: "𝙚",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝙭",
    y: "𝙮",
    z: "𝙯",
    A: "𝘼",
    B: "𝘽",
    C: "𝘾",
    D: "𝘿",
    E: "𝙀",
    F: "𝙁",
    G: "𝙂",
    H: "𝙃",
    I: "𝙄",
    J: "𝙅",
    K: "𝙆",
    L: "𝙇",
    M: "𝙈",
    N: "𝙉",
    O: "𝙊",
    P: "𝙋",
    Q: "𝙌",
    R: "𝙍",
    S: "𝙎",
    T: "𝙏",
    U: "𝙐",
    V: "𝙑",
    W: "𝙒",
    X: "𝙓",
    Y: "𝙔",
    Z: "𝙕",
  },
  "sans-serif-italic": {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
    A: "𝘈",
    B: "𝘉",
    C: "𝘊",
    D: "𝘋",
    E: "𝘌",
    F: "𝘍",
    G: "𝘎",
    H: "𝘏",
    I: "𝘐",
    J: "𝘑",
    K: "𝘒",
    L: "𝘓",
    M: "𝘔",
    N: "𝘕",
    O: "𝘖",
    P: "𝘗",
    Q: "𝘘",
    R: "𝘙",
    S: "𝘚",
    T: "𝘛",
    U: "𝘜",
    V: "𝘝",
    W: "𝘞",
    X: "𝘟",
    Y: "𝘠",
    Z: "𝘡",
  },
  "white-squared": {
    A: "🄰",
    B: "🄱",
    C: "🄲",
    D: "🄳",
    E: "🄴",
    F: "🄵",
    G: "🄶",
    H: "🄷",
    I: "🄸",
    J: "🄹",
    K: "🄺",
    L: "🄻",
    M: "🄼",
    N: "🄽",
    O: "🄾",
    P: "🄿",
    Q: "🅀",
    R: "🅁",
    S: "🅂",
    T: "🅃",
    U: "🅄",
    V: "🅅",
    W: "🅆",
    X: "🅇",
    Y: "🅈",
    Z: "🅉",
  },
  "black-squared": {
    A: "🅰",
    B: "🅱",
    C: "🅲",
    D: "🅳",
    E: "🅴",
    F: "🅵",
    G: "🅶",
    H: "🅷",
    I: "🅸",
    J: "🅹",
    K: "🅺",
    L: "🅻",
    M: "🅼",
    N: "🅽",
    O: "🅾",
    P: "🅿",
    Q: "🆀",
    R: "🆁",
    S: "🆂",
    T: "🆃",
    U: "🆄",
    V: "🆅",
    W: "🆆",
    X: "🆇",
    Y: "🆈",
    Z: "🆉",
    "!": "❗",
    "?": "❓",
  },
  "small-caps": {
    A: "🇦",
    B: "🇧",
    C: "🇨",
    D: "🇩",
    E: "🇪",
    F: "🇫",
    G: "🇬",
    H: "🇭",
    I: "🇮",
    J: "🇯",
    K: "🇰",
    L: "🇱",
    M: "🇲",
    N: "🇳",
    O: "🇴",
    P: "🇵",
    Q: "🇶",
    R: "🇷",
    S: "🇸",
    T: "🇹",
    U: "🇺",
    V: "🇻",
    W: "🇼",
    X: "🇽",
    Y: "🇾",
    Z: "🇿",
  },
  "math-fraktur": {
    a: "𝔞",
    b: "𝔟",
    c: "𝔠",
    d: "𝔡",
    e: "𝔢",
    f: "𝔣",
    g: "𝔤",
    h: "𝔥",
    i: "𝔦",
    j: "𝔧",
    k: "𝔨",
    l: "𝔩",
    m: "𝔪",
    n: "𝔫",
    o: "𝔬",
    p: "𝔭",
    q: "𝔮",
    r: "𝔯",
    s: "𝔰",
    t: "𝔱",
    u: "𝔲",
    v: "𝔳",
    w: "𝔴",
    x: "𝔵",
    y: "𝔶",
    z: "𝔷",
    A: "𝔄",
    B: "𝔅",
    C: "ℭ",
    D: "𝔇",
    E: "𝔈",
    F: "𝔉",
    G: "𝔊",
    H: "ℌ",
    I: "ℑ",
    J: "𝔍",
    K: "𝔎",
    L: "𝔏",
    M: "𝔐",
    N: "𝔑",
    O: "𝔒",
    P: "𝔓",
    Q: "𝔔",
    R: "ℜ",
    S: "𝔖",
    T: "𝔗",
    U: "𝔘",
    V: "𝔙",
    W: "𝔚",
    X: "𝔛",
    Y: "𝔜",
    Z: "ℨ",
  },
  subscript: {
    a: "ₐ",
    b: "ᵦ",
    c: "꜀",
    d: "d",
    e: "ₑ",
    f: "f",
    g: "₉",
    h: "ₕ",
    i: "ᵢ",
    j: "ⱼ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    o: "ₒ",
    p: "ₚ",
    q: "q",
    r: "ᵣ",
    s: "ₛ",
    t: "ₜ",
    u: "ᵤ",
    v: "ᵥ",
    w: "w",
    x: "ₓ",
    y: "ᵧ",
    z: "₂",
  },
  superscript: {
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᶠ",
    g: "ᵍ",
    h: "ʰ",
    i: "ⁱ",
    j: "ʲ",
    k: "ᵏ",
    l: "ˡ",
    m: "ᵐ",
    n: "ⁿ",
    o: "ᵒ",
    p: "ᵖ",
    q: "۹",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ",
    A: "ᴬ",
    B: "ᴮ",
    C: "ᑦ",
    D: "ᴰ",
    E: "ᴱ",
    F: "⸁",
    G: "ᴳ",
    H: "ᴴ",
    I: "ᴵ",
    J: "ᴶ",
    K: "ᴷ",
    L: "ᴸ",
    M: "ᴹ",
    N: "ᴺ",
    O: "ᴼ",
    P: "ᴾ",
    Q: "۹",
    R: "ᴿ",
    S: "ᔆ",
    T: "ᵀ",
    U: "ᵁ",
    V: "ⱽ",
    W: "ᵂ",
    X: "ᕽ",
    Y: "ʸ",
    Z: "ᙆ",
  },
  parenthesized: {
    a: "⒜",
    b: "⒝",
    c: "⒞",
    d: "⒟",
    e: "⒠",
    f: "⒡",
    g: "⒢",
    h: "⒣",
    i: "⒤",
    j: "⒥",
    k: "⒦",
    l: "⒧",
    m: "⒨",
    n: "⒩",
    o: "⒪",
    p: "⒫",
    q: "⒬",
    r: "⒭",
    s: "⒮",
    t: "⒯",
    u: "⒰",
    v: "⒱",
    w: "⒲",
    x: "⒳",
    y: "⒴",
    z: "⒵",
  },
  inverted: {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    A: "∀",
    B: "𐐒",
    C: "Ɔ",
    D: "ᗡ",
    E: "Ǝ",
    F: "Ⅎ",
    G: "⅁",
    H: "H",
    I: "I",
    J: "ſ",
    K: "ﻼ",
    L: "⅂",
    M: "W",
    N: "N",
    O: "O",
    P: "Ԁ",
    Q: "Ꝺ",
    R: "ᖈ",
    S: "S",
    T: "⊥",
    U: "Ո",
    V: "Λ",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",
    "!": "¡",
    "?": "¿",
    ";": " ⸵ ",
    ",": " ⸲",
  },
  reversed: {
    a: "ɒ",
    b: "d",
    c: "ɔ",
    d: "b",
    e: "ɘ",
    f: "ʇ",
    g: "ϱ",
    h: "ʜ",
    i: "i",
    j: "į",
    k: "ʞ",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "q",
    q: "p",
    r: "ɿ",
    s: "ƨ",
    t: "Ɉ",
    u: "υ",
    v: "v",
    w: "w",
    x: "x",
    y: "γ",
    z: "z",
    A: "A",
    B: "𐐒",
    C: "Ɔ",
    D: "Ⴇ",
    E: "Ǝ",
    F: "ꟻ",
    G: "Ә",
    H: "H",
    I: "I",
    J: "Ⴑ",
    K: "ﻼ",
    L: "⅃",
    M: "M",
    N: "И",
    O: "O",
    P: "ꟼ",
    Q: "Ϙ",
    R: "Я",
    S: "Ƨ",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z",
    "?": "⸮",
    ";": " ⁏",
    ",": " ⹁",
  },
  "a-cute": {
    a: "á",
    b: "b́",
    c: "ć",
    d: "d́",
    e: "é",
    f: "f́",
    g: "ǵ",
    h: "h́",
    i: "í",
    j: "j́",
    k: "ḱ",
    l: "ĺ",
    m: "ḿ",
    n: "ń",
    o: "ό",
    p: "ṕ",
    q: "q́",
    r: "ŕ",
    s: "ś",
    t: "t́",
    u: "ú",
    v: "v́",
    w: "ẃ",
    x: "x́",
    y: "ý",
    z: "ź",
    A: "Á",
    B: "B́",
    C: "Ć",
    D: "D́",
    E: "É",
    F: "F́",
    G: "Ǵ",
    H: "H́",
    I: "Í",
    J: "J́",
    K: "Ḱ",
    L: "Ĺ",
    M: "Ḿ",
    N: "Ń",
    O: "Ó",
    P: "Ṕ",
    Q: "Q́",
    R: "Ŕ",
    S: "Ś",
    T: "T́",
    U: "Ú",
    V: "V́",
    W: "Ẃ",
    X: "X́",
    Y: "Ý",
    Z: "Ź",
  },
  "bottom-double-dotted": {
    a: "a̤",
    b: "b̤",
    c: "c̤",
    d: "d̤",
    e: "e̤",
    f: "f̤",
    g: "g̤",
    h: "h̤",
    i: "i̤",
    j: "j̤",
    k: "k̤",
    l: "l̤",
    m: "m̤",
    n: "n̤",
    o: "o̤",
    p: "p̤",
    q: "q̤",
    r: "r̤",
    s: "s̤",
    t: "t̤",
    u: "ṳ",
    v: "v̤",
    w: "w̤",
    x: "x̤",
    y: "y̤",
    z: "z̤",
    A: "A̤",
    B: "B̤",
    C: "C̤",
    D: "D̤",
    E: "E̤",
    F: "F̤",
    G: "G̤",
    H: "H̤",
    I: "I̤",
    J: "J̤",
    K: "K̤",
    L: "L̤",
    M: "M̤",
    N: "N̤",
    O: "O̤",
    P: "P̤",
    Q: "Q̤",
    R: "R̤",
    S: "S̤",
    T: "T̤",
    U: "Ṳ",
    V: "V̤",
    W: "W̤",
    X: "X̤",
    Y: "Y̤",
    Z: "Z̤",
  },
  "top-double-dotted": {
    a: "ä",
    b: "b̈",
    c: "c̈",
    d: "d̈",
    e: "ë",
    f: "f̈",
    g: "g̈",
    h: "ḧ",
    i: "ï",
    j: "j̈",
    k: "k̈",
    l: "l̈",
    m: "m̈",
    n: "n̈",
    o: "ö",
    p: "p̈",
    q: "q̈",
    r: "r̈",
    s: "s̈",
    t: "ẗ",
    u: "ü",
    v: "v̈",
    w: "ẅ",
    x: "ẍ",
    y: "ÿ",
    z: "z̈",
    A: "Ä",
    B: "B̈",
    C: "C̈",
    D: "D̈",
    E: "Ё",
    F: "F̈",
    G: "G̈",
    H: "Ḧ",
    I: "Ї",
    J: "J̈",
    K: "K̈",
    L: "L̈",
    M: "M̈",
    N: "N̈",
    O: "Ö",
    P: "P̈",
    Q: "Q̈",
    R: "R̈",
    S: "S̈",
    T: "T̈",
    U: "Ü",
    V: "V̈",
    W: "Ẅ",
    X: "Ẍ",
    Y: "Ÿ",
    Z: "Z̈",
  },
  "quadruple-dotted": {
    a: "ä̤",
    b: "b̤̈",
    c: "c̤̈",
    d: "d̤̈",
    e: "ë̤",
    f: "f̤̈",
    g: "g̤̈",
    h: "ḧ̤",
    i: "ï̤",
    j: "j̤̈",
    k: "k̤̈",
    l: "l̤̈",
    m: "m̤̈",
    n: "n̤̈",
    o: "ö̤",
    p: "p̤̈",
    q: "q̤̈",
    r: "r̤̈",
    s: "s̤̈",
    t: "ẗ̤",
    u: "ṳ̈",
    v: "v̤̈",
    w: "ẅ̤",
    x: "ẍ̤",
    y: "ÿ̤",
    z: "z̤̈",
    A: "Ä̤",
    B: "B̤̈",
    C: "C̤̈",
    D: "D̤̈",
    E: "Ë̤",
    F: "F̤̈",
    G: "G̤̈",
    H: "Ḧ̤",
    I: "Ï̤",
    J: "J̤̈",
    K: "K̤̈",
    L: "L̤̈",
    M: "M̤̈",
    N: "N̤̈",
    O: "Ö̤",
    P: "P̤̈",
    Q: "Q̤̈",
    R: "R̤̈",
    S: "S̤̈",
    T: "T̤̈",
    U: "Ṳ̈",
    V: "V̤̈",
    W: "Ẅ̤",
    X: "Ẍ̤",
    Y: "Ÿ̤",
    Z: "Z̤̈",
  },
  stroked: {
    a: "̸a",
    b: "̸b",
    c: "̸c",
    d: "̸d",
    e: "̸e",
    f: "̸f",
    g: "̸g",
    h: "̸h",
    i: "̸i",
    j: "̸j",
    k: "̸k",
    l: "̸l",
    m: "̸m",
    n: "̸n",
    o: "̸o",
    p: "̸p",
    q: "̸q",
    r: "̸r",
    s: "̸s",
    t: "̸t",
    u: "̸u",
    v: "̸v",
    w: "̸w",
    x: "̸x",
    y: "̸y",
    z: "̸z",
    A: "̸A",
    B: "̸B",
    C: "̸C",
    D: "̸D",
    E: "̸E",
    F: "̸F",
    G: "̸G",
    H: "̸H",
    I: "̸I",
    J: "̸J",
    K: "̸K",
    L: "̸L",
    M: "̸M",
    N: "̸N",
    O: "̸O",
    P: "̸P",
    Q: "̸Q",
    R: "̸R",
    S: "̸S",
    T: "̸T",
    U: "̸U",
    V: "̸V",
    W: "̸W",
    X: "̸X",
    Y: "̸Y",
    Z: "̸Z",
  },
  "unique-1": {
    a: "ል",
    b: "ጌ",
    c: "ር",
    d: "ዕ",
    e: "ቿ",
    f: "ቻ",
    g: "ኗ",
    h: "ዘ",
    i: "ጎ",
    j: "ጋ",
    k: "ጕ",
    l: "ረ",
    m: "ጠ",
    n: "ክ",
    o: "ዐ",
    p: "የ",
    q: "ዒ",
    r: "ዪ",
    s: "ነ",
    t: "ፕ",
    u: "ሁ",
    v: "ሀ",
    w: "ሠ",
    x: "ሸ",
    y: "ሃ",
    z: "ጊ",
  },
  "unique-2": {
    a: "ﾑ",
    b: "乃",
    c: "c",
    d: "d",
    e: "乇",
    f: "ｷ",
    g: "g",
    h: "ん",
    i: "ﾉ",
    j: "ﾌ",
    k: "ズ",
    l: "ﾚ",
    m: "ﾶ",
    n: "刀",
    o: "o",
    p: "ｱ",
    q: "q",
    r: "尺",
    s: "丂",
    t: "ｲ",
    u: "u",
    v: "√",
    w: "w",
    x: "ﾒ",
    y: "ﾘ",
    z: "乙",
  },
};

var unicodeNumbers = {
  "white-circled": {
    0: "⓪",
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
    10: "⑩",
    11: "⑪",
    12: "⑫",
    13: "⑬",
    14: "⑭",
    15: "⑮",
    16: "⑯",
    17: "⑰",
    18: "⑱",
    19: "⑲",
    20: "⑳",
    21: "㉑",
    22: "㉒",
    23: "㉓",
    24: "㉔",
    25: "㉕",
    26: "㉖",
    27: "㉗",
    28: "㉘",
    29: "㉙",
    30: "㉚",
    31: "㉛",
    32: "㉜",
    33: "㉝",
    34: "㉞",
    35: "㉟",
    36: "㊱",
    37: "㊲",
    38: "㊳",
    39: "㊴",
    40: "㊵",
    41: "㊶",
    42: "㊷",
    43: "㊸",
    44: "㊹",
    45: "㊺",
    46: "㊻",
    47: "㊼",
    48: "㊽",
    49: "㊾",
    50: "㊿",
  },
  "black-circled": {
    0: "⓿",
    1: "❶",
    2: "❷",
    3: "❸",
    4: "❹",
    5: "❺",
    6: "❻",
    7: "❼",
    8: "❽",
    9: "❾",
    10: "❿",
    11: "⓫",
    12: "⓬",
    13: "⓭",
    14: "⓮",
    15: "⓯",
    16: "⓰",
    17: "⓱",
    18: "⓲",
    19: "⓳",
    20: "⓴",
  },
  fullwidth: {
    0: "０",
    1: "１",
    2: "２",
    3: "３",
    4: "４",
    5: "５",
    6: "６",
    7: "７",
    8: "８",
    9: "９",
  },
  bold: {
    0: "𝟎",
    1: "𝟏",
    2: "𝟐",
    3: "𝟑",
    4: "𝟒",
    5: "𝟓",
    6: "𝟔",
    7: "𝟕",
    8: "𝟖",
    9: "𝟗",
  },
  "double-struck": {
    0: "𝟘",
    1: "𝟙",
    2: "𝟚",
    3: "𝟛",
    4: "𝟜",
    5: "𝟝",
    6: "𝟞",
    7: "𝟟",
    8: "𝟠",
    9: "𝟡",
  },
  monospace: {
    0: "𝟶",
    1: "𝟷",
    2: "𝟸",
    3: "𝟹",
    4: "𝟺",
    5: "𝟻",
    6: "𝟼",
    7: "𝟽",
    8: "𝟾",
    9: "𝟿",
  },
  "sans-serif": {
    0: "𝟢",
    1: "𝟣",
    2: "𝟤",
    3: "𝟥",
    4: "𝟦",
    5: "𝟧",
    6: "𝟨",
    7: "𝟩",
    8: "𝟪",
    9: "𝟫",
  },
  "sans-serif-bold": {
    0: "𝟬",
    1: "𝟭",
    2: "𝟮",
    3: "𝟯",
    4: "𝟰",
    5: "𝟱",
    6: "𝟲",
    7: "𝟳",
    8: "𝟴",
    9: "𝟵",
  },
  subscript: {
    0: "₀",
    1: "₁",
    2: "₂",
    3: "₃",
    4: "₄",
    5: "₅",
    6: "₆",
    7: "₇",
    8: "₈",
    9: "₉",
  },
  superscript: {
    0: "⁰",
    1: "¹",
    2: "²",
    3: "³",
    4: "⁴",
    5: "⁵",
    6: "⁶",
    7: "⁷",
    8: "⁸",
    9: "⁹",
  },
  parenthesized: {
    1: "⑴",
    2: "⑵",
    3: "⑶",
    4: "⑷",
    5: "⑸",
    6: "⑹",
    7: "⑺",
    8: "⑻",
    9: "⑼",
    10: "⑽",
    11: "⑾",
    12: "⑿",
    13: "⒀",
    14: "⒁",
    15: "⒂",
    16: "⒃",
    17: "⒄",
    18: "⒅",
    19: "⒆",
    20: "⒇",
  },
  inverted: {
    0: "𝟶",
    1: "⇂",
    2: "ᘔ",
    3: "Ɛ",
    4: "𝗁",
    5: "𝖲",
    6: "𝟿",
    7: "ረ",
    8: "𝟾",
    9: "𝟼",
  },
  reversed: {
    0: "𝙾",
    1: "⥜",
    2: "𝖲",
    3: "Ꮛ",
    4: "ᖸ",
    5: "ट",
    6: "მ",
    7: "٢",
    8: "৪",
    9: "♇",
  },
  "with-period": {
    0: "🄀",
    1: "⒈",
    2: "⒉",
    3: "⒊",
    4: "⒋",
    5: "⒌",
    6: "⒍",
    7: "⒎",
    8: "⒏",
    9: "⒐",
    10: "⒑",
    11: "⒒",
    12: "⒓",
    13: "⒔",
    14: "⒕",
    15: "⒖",
    16: "⒗",
    17: "⒘",
    18: "⒙",
    19: "⒚",
    20: "⒛",
  },
  "with-comma": {
    0: "🄁",
    1: "🄂",
    2: "🄃",
    3: "🄄",
    4: "🄅",
    5: "🄆",
    6: "🄇",
    7: "🄈",
    8: "🄉",
    9: "🄊",
  },
  "double-circled": {
    1: "⓵",
    2: "⓶",
    3: "⓷",
    4: "⓸",
    5: "⓹",
    6: "⓺",
    7: "⓻",
    8: "⓼",
    9: "⓽",
    10: "⓾",
  },
  greek: {
    1: "Α",
    2: "Β",
    3: "Γ",
    4: "Δ",
    5: "Ε",
    6: "Ϛ",
    7: "Ζ",
    8: "Η",
    9: "Θ",
    10: "Ι",
    20: "Κ",
    30: "Λ",
    40: "Μ",
    50: "Ν",
    60: "Ξ",
    70: "Ο",
    80: "Π",
    90: "Ϟ",
  },
  "uppercase-roman": {
    1: "Ⅰ",
    2: "Ⅱ",
    3: "Ⅲ",
    4: "Ⅳ",
    5: "Ⅴ",
    6: "Ⅵ",
    7: "Ⅶ",
    8: "Ⅷ",
    9: "Ⅸ",
    10: "Ⅹ",
    11: "Ⅺ",
    12: "Ⅻ",
    50: "Ⅼ",
  },
  "lowercase-roman": {
    1: "ⅰ",
    2: "ⅱ",
    3: "ⅲ",
    4: "ⅳ",
    5: "ⅴ",
    6: "ⅵ",
    7: "ⅶ",
    8: "ⅷ",
    9: "ⅸ",
    10: "ⅹ",
    11: "ⅺ",
    12: "ⅻ",
    50: "ⅼ",
  },
  "unique-1": {
    0: "θ",
    1: "˦",
    2: "Ϩ",
    3: "Յ",
    4: "Ϥ",
    5: "Ƽ",
    6: "δ",
    7: "𐒇",
    8: "ϐ",
    9: "ƍ",
  },
  "unique-2": {
    0: "○",
    1: "⥑",
    2: "ջ",
    3: "ჳ",
    4: "ʮ",
    5: "ҕ",
    6: "ϭ",
    7: "⁊",
    8: "ზ",
    9: "𝚐",
  },
};

var topCombiningChars = {
  "grave-accent": "\u0300",
  "acute-accent": "\u0301",
  "circumflex-accent": "\u0302",
  tilde: "\u0303",
  macron: "\u0304",
  overline: "\u0305",
  breve: "\u0306",
  dot: "\u0307",
  diaeresis: "\u0308",
  hook: "\u0309",
  ring: "\u030a",
  "double-acute-accent": "\u030b",
  caron: "\u030c",
  "vertical-line": "\u030d",
  "double-vertical-line": "\u030e",
  "double-grave-accent": "\u030f",
  chandrabindu: "\u0310",
  "inverted-breve": "\u0311",
  "turned-comma": "\u0312",
  comma: "\u0313",
  "reversed-comma": "\u0314",
  "comma-right": "\u0315",
  "left-angle": "\u031a",
  horn: "\u031b",
  "symbol-x": "\u033d",
  "vertical-tilde": "\u033e",
  "double-overline": "\u033f",
  "grave-tone-mark": "\u0340",
  "acute-tone-mark": "\u0341",
  "greek-perispomeni": "\u0342",
  "greek-koronis": "\u0343",
  "greek-dialytika-tonos": "\u0344",
  bridge: "\u0346",
  "not-tilde": "\u034a",
  homothetic: "\u034b",
  "almost-equal-to": "\u034c",
  "right-arrowhead": "\u0350",
  "left-half-ring": "\u0351",
  fermata: "\u0352",
  "right-half-ring": "\u0357",
  "dot-right": "\u0358",
  zigzag: "\u035b",
  "double-breve": "\u035d",
  "double-macron": "\u035e",
  "double-tilde": "\u0360",
  "double-inverted-breve": "\u0361",
  "letter-a": "\u0363",
  "letter-e": "\u0364",
  "letter-i": "\u0365",
  "letter-o": "\u0366",
  "letter-u": "\u0367",
  "letter-c": "\u0368",
  "letter-d": "\u0369",
  "letter-h": "\u036a",
  "letter-m": "\u036b",
  "letter-r": "\u036c",
  "letter-t": "\u036d",
  "letter-v": "\u036e",
  "letter-x": "\u036f",
  "dotted-grave-accent": "\u1dc0",
  "dotted-acute-accent": "\u1dc1",
  "suspension-mark": "\u1dc3",
  "macron-acute": "\u1dc4",
  "grave-macron": "\u1dc5",
  "macron-grave": "\u1dc6",
  "acute-macron": "\u1dc7",
  "grave-acute-grave": "\u1dc8",
  "acute-grave-acute": "\u1dc9",
  "left-arrowhead": "\u1dfe",
  "left-harpoon": "\u20d0",
  "right-harpoon": "\u20d1",
  "anticlockwise-arrow": "\u20d4",
  "clockwise-arrow": "\u20d5",
  "left-arrow": "\u20d6",
  "right-arrow": "\u20d7",
  "three-dots": "\u20db",
  "four-dots": "\u20dc",
  "left-right-arrow": "\u20e1",
  "wide-bridge": "\u20e9",
  asterisk: "\u20f0",
  "ligature-left-half": "\ufe20",
  "ligature-right-half": "\ufe21",
  "double-tilde-left-half": "\ufe22",
  "double-tilde-right-half": "\ufe23",
};

var middleCombiningChars = {
  tilde: "\u0334",
  "short-stroke": "\u0335",
  "long-stroke": "\u0336",
  "short-solidus": "\u0337",
  "long-solidus": "\u0338",
  "long-vertical-line": "\u20d2",
  "short-vertical-line": "\u20d3",
  ring: "\u20d8",
  "clockwise-ring": "\u20d9",
  "anticlockwise-ring": "\u20da",
  "enclosing-circle": "\u20dd",
  "enclosing-square": "\u20de",
  "enclosing-diamond": "\u20df",
  "reverse-solidus": "\u20e5",
  "double-vertical-stroke": "\u20e6",
};

var bottomCombiningChars = {
  "grave-accent": "\u0316",
  "acute-accent": "\u0317",
  "left-tack": "\u0318",
  "right-tack": "\u0319",
  "left-half-ring": "\u031c",
  "up-tack": "\u031d",
  "down-tack": "\u031e",
  "plus-sign": "\u031f",
  "minus-sign": "\u0320",
  "palatalized-hook": "\u0321",
  "retroflex-hook": "\u0322",
  dot: "\u0323",
  diaeresis: "\u0324",
  ring: "\u0325",
  comma: "\u0326",
  cedilla: "\u0327",
  ogonek: "\u0328",
  "vertical-line": "\u0329",
  bridge: "\u032a",
  "inverted-double-arch": "\u032b",
  caron: "\u032c",
  "circumflex-accent": "\u032d",
  breve: "\u032e",
  "inverted-breve": "\u032f",
  tilde: "\u0330",
  macron: "\u0331",
  "low-line": "\u0332",
  "double-low-line": "\u0333",
  "right-half-ring": "\u0339",
  "inverted-bridge": "\u033a",
  square: "\u033b",
  seagull: "\u033c",
  "greek-ypogegrammeni": "\u0345",
  "equals-sign": "\u0347",
  "double-vertical-line": "\u0348",
  "left-angle": "\u0349",
  "left-right-arrow": "\u034d",
  "upwards-arrow": "\u034e",
  "symbol-x": "\u0353",
  "left-arrowhead": "\u0354",
  "right-arrowhead": "\u0355",
  "right-and-up-arrowhead": "\u0356",
  asterisk: "\u0359",
  "double-ring": "\u035a",
  "double-breve": "\u035c",
  "double-macron": "\u035f",
  "double-rightwards-arrow": "\u0362",
  snake: "\u1dc2",
  "letter-r": "\u1dca",
  "right-down-arrowhead": "\u1dff",
  "combining-triple-underdot": "\u20e8",
};