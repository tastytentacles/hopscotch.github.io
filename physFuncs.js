function add_gravity(e) {
    e_mod = e;
    e_mod[2] += (256 - e[0]) / 512;
    e_mod[3] += (256 - e[1]) / 512;

    return e_mod;
}

function apply_speed(e) {
    e_mod = e;
    e[0] += e[2];
    e[1] += e[3];

    return e
}