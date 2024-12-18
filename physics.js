let a = 0
let getAcceleration = (x) => {

    if (x.d && x.t) {
        return 2 * (x.d / (x.t * x.t))
    } else if (x.Δv && x.Δt) {
        return x.Δv / x.Δt
    } else if (x.f && x.m) {
        return x.f / x.m
    } else {
        return 'impossible'
    }

}