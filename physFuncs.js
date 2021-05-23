function add_gravity(e, odots, i) {
    odots.splice(i, 1);
    
    e_mod = e;
    odots.forEach(ee => {
        e_mod[2] += (ee[0] - e[0]) / 9999;
        e_mod[3] += (ee[1] - e[1]) / 9999;
    });

    e_mod[2] += ((256 - e[0]) / 512) / 10;
    e_mod[3] += ((256 - e[1]) / 512) / 10;

    return e_mod;
}

function apply_speed(e) {
    e_mod = e;
    e[0] += e[2];
    e[1] += e[3];

    return e
}

function normalize(e) {
    
}