// e = 2f6170692f766964656f3f763d
// function avs(e) {
//     for (var t = e.toString(), e = "", n = 0; n < t.length; n += 2)
//         e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
//     return e
// }
//算出来 e = "/api/video?v="

//22815 这一行

// e = 2669703d
// 算出 e = &ip=
//添加 ip

// e= 26743d
// 算出 e = &t=

// e = 2675783d
// 算出 e = &ux=

// 接下来是算 &s=

// e= 617648446c306c2e636f6d2e6176 

// e = avHDl0l.com.av6vo8KD53Zk415875203622120015 这个是 拼接起来的

// 由 avHDl0l.com.av + 片ID + 时间戳 + 用户 ID

// e = 'avHDl0l.com.av6vo8KD53Zk415875203622120015'

// 找到 两个函数

// 其实就是一个 SHA256加密过程

var mm99 = function(n){
	// 找到 t函数 这个 i 是 undefine
	return new t(null,(!0)).update(n).hex()
}


var f = [1635141700, 1815112750, 1668246830, 1635137142, 1865960260, 892557931, 875640120, 926233136, 859189810, 825372720, 825589760, 0, 0, 0, 0, 336, -587305275, 701011922, -881947992, 1383578782, 163754865, -1701043514, 1846201836, -1747123975, -2036911963, -2094292870, 34935539, -1378513271, -977041710, -456563681, -340571175, 820229331, -1317716637, -1020350496, -1941726845, -361789631, 1161157017, 539498974, -1731737102, -249182653, 1965331091, 239030978, 751741183, -1832028203, -508680067, 253586291, -81021105, 1559300648, -549384022, -2060220010, 1221741281, -834596760, 2126830063, -910913419, -706427725, -1219031565, 1186864410, 276535714, -1395077604, 1063094220, -412417227, -984392041, -1376374969, 1926467066];
var c = [24, 16, 8, 0];
var l = [-2147483648, 8388608, 32768, 128];
var d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];


function t(t, e) {
    e ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0,
    this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    t ? (this.h0 = 3238371032,
    this.h1 = 914150663,
    this.h2 = 812702999,
    this.h3 = 4144912697,
    this.h4 = 4290775857,
    this.h5 = 1750603025,
    this.h6 = 1694076839,
    this.h7 = 3204075428) : (this.h0 = 1779033703,
    this.h1 = 3144134277,
    this.h2 = 1013904242,
    this.h3 = 2773480762,
    this.h4 = 1359893119,
    this.h5 = 2600822924,
    this.h6 = 528734635,
    this.h7 = 1541459225),
    this.block = this.start = this.bytes = 0,
    this.finalized = this.hashed = !1,
    this.first = !0,
    this.is224 = t
};

t.prototype.update = function(t){
        if (!this.finalized) {
            var e = "string" != typeof t;
            if (e) {
                if (null === t || void 0 === t)
                    throw i;
                t.constructor === n.ArrayBuffer && (t = new Uint8Array(t))
            }
            var r = t.length;
            if (e && ("number" != typeof r || !(Array.isArray(t) || s && ArrayBuffer.isView(t))))
                throw i;
            for (var a, o, u = 0, l = this.blocks; r > u; ) {
                if (this.hashed && (this.hashed = !1,
                l[0] = this.block,
                l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0),
                e)
                    for (o = this.start; r > u && 64 > o; ++u)
                        l[o >> 2] |= t[u] << c[3 & o++];
                else
                    for (o = this.start; r > u && 64 > o; ++u)
                        a = t.charCodeAt(u),
                        128 > a ? l[o >> 2] |= a << c[3 & o++] : 2048 > a ? (l[o >> 2] |= (192 | a >> 6) << c[3 & o++],
                        l[o >> 2] |= (128 | 63 & a) << c[3 & o++]) : 55296 > a || a >= 57344 ? (l[o >> 2] |= (224 | a >> 12) << c[3 & o++],
                        l[o >> 2] |= (128 | a >> 6 & 63) << c[3 & o++],
                        l[o >> 2] |= (128 | 63 & a) << c[3 & o++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++u)),
                        l[o >> 2] |= (240 | a >> 18) << c[3 & o++],
                        l[o >> 2] |= (128 | a >> 12 & 63) << c[3 & o++],
                        l[o >> 2] |= (128 | a >> 6 & 63) << c[3 & o++],
                        l[o >> 2] |= (128 | 63 & a) << c[3 & o++]);
                this.lastByteIndex = o,
                this.bytes += o - this.start,
                o >= 64 ? (this.block = l[16],
                this.start = o - 64,
                this.hash(),
                this.hashed = !0) : this.start = o
            }
            return this
        }
    };

t.prototype.hex = function() {
    this.finalize();
    var t = this.h0
      , e = this.h1
      , i = this.h2
      , n = this.h3
      , r = this.h4
      , a = this.h5
      , o = this.h6
      , s = this.h7
      , l = u[t >> 28 & 15] + u[t >> 24 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 4 & 15] + u[15 & t] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 4 & 15] + u[15 & e] + u[i >> 28 & 15] + u[i >> 24 & 15] + u[i >> 20 & 15] + u[i >> 16 & 15] + u[i >> 12 & 15] + u[i >> 8 & 15] + u[i >> 4 & 15] + u[15 & i] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 4 & 15] + u[15 & n] + u[r >> 28 & 15] + u[r >> 24 & 15] + u[r >> 20 & 15] + u[r >> 16 & 15] + u[r >> 12 & 15] + u[r >> 8 & 15] + u[r >> 4 & 15] + u[15 & r] + u[a >> 28 & 15] + u[a >> 24 & 15] + u[a >> 20 & 15] + u[a >> 16 & 15] + u[a >> 12 & 15] + u[a >> 8 & 15] + u[a >> 4 & 15] + u[15 & a] + u[o >> 28 & 15] + u[o >> 24 & 15] + u[o >> 20 & 15] + u[o >> 16 & 15] + u[o >> 12 & 15] + u[o >> 8 & 15] + u[o >> 4 & 15] + u[15 & o];
    return this.is224 || (l += u[s >> 28 & 15] + u[s >> 24 & 15] + u[s >> 20 & 15] + u[s >> 16 & 15] + u[s >> 12 & 15] + u[s >> 8 & 15] + u[s >> 4 & 15] + u[15 & s]),
    l
};

t.prototype.finalize = function() {
    if (!this.finalized) {
        this.finalized = !0;
        var t = this.blocks
          , e = this.lastByteIndex;
        t[16] = this.block,
        t[e >> 2] |= l[3 & e],
        this.block = t[16],
        e >= 56 && (this.hashed || this.hash(),
        t[0] = this.block,
        t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
        t[15] = this.bytes << 3,
        this.hash()
    }
};

t.prototype.hash = function() {
    var t, e, i, n, r, a, o, s, u, l, c, h = this.h0, f = this.h1, p = this.h2, g = this.h3, m = this.h4, y = this.h5, v = this.h6, _ = this.h7, b = this.blocks;
    for (t = 16; 64 > t; ++t)
        r = b[t - 15],
        e = (r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3,
        r = b[t - 2],
        i = (r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10,
        b[t] = b[t - 16] + e + b[t - 7] + i << 0;
    for (c = f & p,
    t = 0; 64 > t; t += 4)
        this.first ? (this.is224 ? (s = 300032,
        r = b[0] - 1413257819,
        _ = r - 150054599 << 0,
        g = r + 24177077 << 0) : (s = 704751109,
        r = b[0] - 210244248,
        _ = r - 1521486534 << 0,
        g = r + 143694565 << 0),
        this.first = !1) : (e = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
        i = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7),
        s = h & f,
        n = s ^ h & p ^ c,
        o = m & y ^ ~m & v,
        r = _ + i + o + d[t] + b[t],
        a = e + n,
        _ = g + r << 0,
        g = r + a << 0),
        e = (g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10),
        i = (_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7),
        u = g & h,
        n = u ^ g & f ^ s,
        o = _ & m ^ ~_ & y,
        r = v + i + o + d[t + 1] + b[t + 1],
        a = e + n,
        v = p + r << 0,
        p = r + a << 0,
        e = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10),
        i = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7),
        l = p & g,
        n = l ^ p & h ^ u,
        o = v & _ ^ ~v & m,
        r = y + i + o + d[t + 2] + b[t + 2],
        a = e + n,
        y = f + r << 0,
        f = r + a << 0,
        e = (f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10),
        i = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7),
        c = f & p,
        n = c ^ f & g ^ l,
        o = y & v ^ ~y & _,
        r = m + i + o + d[t + 3] + b[t + 3],
        a = e + n,
        m = h + r << 0,
        h = r + a << 0;
    this.h0 = this.h0 + h << 0,
    this.h1 = this.h1 + f << 0,
    this.h2 = this.h2 + p << 0,
    this.h3 = this.h3 + g << 0,
    this.h4 = this.h4 + m << 0,
    this.h5 = this.h5 + y << 0,
    this.h6 = this.h6 + v << 0,
    this.h7 = this.h7 + _ << 0
};