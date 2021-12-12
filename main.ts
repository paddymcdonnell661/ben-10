namespace StatusBarKind {
    export const Timer = StatusBarKind.create()
    export const PointSystem = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.FacingDown))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 f f f f f f 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.MovingDown))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 f f f f f f 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.HittingWallDown))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 f f f f f f 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.FacingUp))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 f f f f f f 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.MovingUp))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 f f f f f f 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.HittingWallUp))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 f f f f f f 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 f f f f f f 5 5 5 5 f 
            f f f f f f 5 5 5 5 f f f f f f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.FacingLeft))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 5 f f f 5 f 
            f 5 5 f 5 5 f 5 5 5 f 5 5 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 5 5 f 5 5 5 f 5 5 f 5 5 f 
            f 5 f f f 5 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 f f f 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 f f f 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.MovingLeft))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 5 f f f 5 f 
            f 5 5 f 5 5 f 5 5 5 f 5 5 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 5 5 f 5 5 5 f 5 5 f 5 5 f 
            f 5 f f f 5 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 f f f 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 f f f 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.HittingWallLeft))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 5 f f f 5 f 
            f 5 5 f 5 5 f 5 5 5 f 5 5 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 5 5 f 5 5 5 f 5 5 f 5 5 f 
            f 5 f f f 5 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 f f f 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 f f f 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.FacingRight))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            f 5 f f f 5 5 5 5 f 5 5 f 5 5 f 
            f 5 5 5 5 f 5 5 5 f 5 5 f 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 f 5 5 f 5 5 5 f 5 5 5 5 f 
            f 5 5 f 5 5 f 5 5 5 5 f f f 5 f 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 f f f 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 f f f 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.MovingRight))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            f 5 f f f 5 5 5 5 f 5 5 f 5 5 f 
            f 5 5 5 5 f 5 5 5 f 5 5 f 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 f 5 5 f 5 5 5 f 5 5 5 5 f 
            f 5 5 f 5 5 f 5 5 5 5 f f f 5 f 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 f f f 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 f f f 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.HittingWallRight))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            f 5 f f f 5 5 5 5 f 5 5 f 5 5 f 
            f 5 5 5 5 f 5 5 5 f 5 5 f 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 f 5 5 f 5 5 5 f 5 5 5 5 f 
            f 5 5 f 5 5 f 5 5 5 5 f f f 5 f 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 5 5 5 5 5 f 5 5 5 5 5 5 f . 
            f 5 f f 5 5 f f 5 5 5 5 5 f 5 f 
            f 5 5 f 5 5 f 5 5 5 f f f 5 5 f 
            f 5 5 5 f 5 f f f f 5 5 5 5 5 f 
            f 5 5 5 5 f 5 5 5 5 f f f f 5 f 
            f 5 5 5 5 f 5 5 5 5 f 5 5 f f f 
            f f f 5 5 f 5 5 5 5 f 5 5 5 5 f 
            f 5 f f f f 5 5 5 5 f 5 5 5 5 f 
            f 5 5 5 5 5 f f f f 5 f 5 5 5 f 
            f 5 5 f f f 5 5 5 f 5 5 f 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 f f 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 f . 
            . . f f f f f f f f f f f f . . 
            `],
        350,
        true
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(false, effects.dissolve)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
})
let statusbar: StatusBarSprite = null
let Cannonbolt: Sprite = null
Cannonbolt = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . f f f . f 5 5 5 5 f . f f f . 
    f 5 5 f f f f f f f f f f 5 5 f 
    f 5 f f f f f 1 c f f f f f 5 f 
    . f f 1 1 1 f c 1 f 1 1 1 f f . 
    . f f f f 1 1 f f 1 1 f f f f . 
    . f 1 f 5 f 1 f f 1 f 5 f 1 f . 
    f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
    f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
    f f f 1 1 f f f f f f 1 1 f f f 
    f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
    f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
    f f 5 f 1 f f 5 5 f f 1 f 5 f f 
    . f 5 f 1 f . f f . f 1 f 5 f . 
    . . f 1 1 1 f . . f 1 1 1 f . . 
    . . f f f f . . . . f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Cannonbolt, 90, 90)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Cannonbolt)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Timer)
let statusbar3 = statusbars.create(20, 4, StatusBarKind.PointSystem)
statusbar.setBarBorder(1, 15)
statusbar.setBarSize(30, 6)
statusbar.max = 100
statusbar.value = 100
statusbar.setColor(5, 4)
statusbar.setOffsetPadding(1, 1)
statusbar.setOffsetPadding(-50, 10)
statusbar.positionDirection(CollisionDirection.Left)
statusbar.setLabel("HP")
statusbar2.setBarBorder(1, 15)
statusbar2.setBarSize(30, 6)
statusbar2.max = 100
statusbar2.value = 100
statusbar2.setColor(7, 6)
statusbar2.setOffsetPadding(-40, 8)
statusbar2.positionDirection(CollisionDirection.Left)
statusbar2.setLabel("TP")
statusbar3.setBarBorder(1, 15)
statusbar3.setBarSize(30, 6)
statusbar3.max = 100
statusbar3.value = 0
statusbar3.setColor(10, 0)
statusbar3.setOffsetPadding(-30, 6)
statusbar3.positionDirection(CollisionDirection.Left)
statusbar3.setLabel("LV")
game.onUpdate(function () {
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.MovingUp))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            . f f f f f f 5 5 f f f f f f . 
            . f f 5 5 5 f f f f 5 5 5 f f . 
            . f f 5 5 5 5 5 5 5 5 5 5 f f . 
            f 5 f f f f f 5 5 f f f f f 5 f 
            f 5 f 5 5 5 f f f f 5 5 5 f 5 f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f 1 f f f f f 5 5 f f f f f 1 f 
            f 1 f 5 5 5 f f f f 5 5 5 f 1 f 
            f f 5 f f f f 5 5 f f f f 5 f f 
            . f 5 f 1 f . f f . f 1 f 5 f . 
            . . f 1 1 1 f . . f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            . f f f f f f 5 5 f f f f f f . 
            . f f 5 5 5 f f f f 5 5 5 f f . 
            . f f 5 5 5 5 5 5 5 5 5 5 f f . 
            f 5 f f f f f 5 5 f f f f f 5 f 
            f 5 f 5 5 5 f f f f 5 5 5 f 5 f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f 1 f f f f f 5 5 f f f f f 1 f 
            f 1 f 5 5 5 f f f f 5 5 5 f 1 f 
            f f 5 f f f f 5 5 f f f f 5 f f 
            . . f 1 1 1 f f f f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.FacingUp))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            . f f f f f f 5 5 f f f f f f . 
            . f f 5 5 5 f f f f 5 5 5 f f . 
            . f f 5 5 5 5 5 5 5 5 5 5 f f . 
            f 5 f f f f f 5 5 f f f f f 5 f 
            f 5 f 5 5 5 f f f f 5 5 5 f 5 f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f 1 f f f f f 5 5 f f f f f 1 f 
            f 1 f 5 5 5 f f f f 5 5 5 f 1 f 
            f f 5 f f f f 5 5 f f f f 5 f f 
            . f 5 f 1 f . f f . f 1 f 5 f . 
            . . f 1 1 1 f . . f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            . f f f f f f 5 5 f f f f f f . 
            . f f 5 5 5 f f f f 5 5 5 f f . 
            . f f 5 5 5 5 5 5 5 5 5 5 f f . 
            f 5 f f f f f 5 5 f f f f f 5 f 
            f 5 f 5 5 5 f f f f 5 5 5 f 5 f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f 1 f f f f f 5 5 f f f f f 1 f 
            f 1 f 5 5 5 f f f f 5 5 5 f 1 f 
            f f 5 f f f f 5 5 f f f f 5 f f 
            . . f 1 1 1 f f f f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.HittingWallUp))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            . f f f f f f 5 5 f f f f f f . 
            . f f 5 5 5 f f f f 5 5 5 f f . 
            . f f 5 5 5 5 5 5 5 5 5 5 f f . 
            f 5 f f f f f 5 5 f f f f f 5 f 
            f 5 f 5 5 5 f f f f 5 5 5 f 5 f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f 1 f f f f f 5 5 f f f f f 1 f 
            f 1 f 5 5 5 f f f f 5 5 5 f 1 f 
            f f 5 f f f f 5 5 f f f f 5 f f 
            . f 5 f 1 f . f f . f 1 f 5 f . 
            . . f 1 1 1 f . . f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            . f f f f f f 5 5 f f f f f f . 
            . f f 5 5 5 f f f f 5 5 5 f f . 
            . f f 5 5 5 5 5 5 5 5 5 5 f f . 
            f 5 f f f f f 5 5 f f f f f 5 f 
            f 5 f 5 5 5 f f f f 5 5 5 f 5 f 
            f f f 5 5 5 5 5 5 5 5 5 5 f f f 
            f 1 f f f f f 5 5 f f f f f 1 f 
            f 1 f 5 5 5 f f f f 5 5 5 f 1 f 
            f f 5 f f f f 5 5 f f f f 5 f f 
            . . f 1 1 1 f f f f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.MovingDown))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f f f f f 1 c f f f f f 5 f 
            . f f 1 1 1 f c 1 f 1 1 1 f f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f 1 f 5 f 1 f f 1 f 5 f 1 f . 
            f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
            f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
            f f f 1 1 f f f f f f 1 1 f f f 
            f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
            f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
            f f 5 f 1 f f 5 5 f f 1 f 5 f f 
            . f 5 f 1 f . f f . f 1 f 5 f . 
            . . f 1 1 1 f . . f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f f f f f 1 c f f f f f 5 f 
            . f f 1 1 1 f c 1 f 1 1 1 f f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f 1 f f f 1 f f 1 f f f 1 f . 
            f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
            f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
            f f f 1 1 f f f f f f 1 1 f f f 
            f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
            f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
            . f 5 f 1 f f 5 5 f f 1 f 5 f . 
            . . f 1 1 1 f f f f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.FacingDown))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f f f f f 1 c f f f f f 5 f 
            . f f 1 1 1 f c 1 f 1 1 1 f f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f 1 f 5 f 1 f f 1 f 5 f 1 f . 
            f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
            f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
            f f f 1 1 f f f f f f 1 1 f f f 
            f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
            f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
            f f 5 f 1 f f 5 5 f f 1 f 5 f f 
            . f 5 f 1 f . f f . f 1 f 5 f . 
            . . f 1 1 1 f . . f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f f f f f 1 c f f f f f 5 f 
            . f f 1 1 1 f c 1 f 1 1 1 f f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f 1 f f f 1 f f 1 f f f 1 f . 
            f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
            f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
            f f f 1 1 f f f f f f 1 1 f f f 
            f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
            f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
            . f 5 f 1 f f 5 5 f f 1 f 5 f . 
            . . f 1 1 1 f f f f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `],
        350,
        true
        )
    }
    if (characterAnimations.matchesRule(Cannonbolt, characterAnimations.rule(Predicate.HittingWallDown))) {
        animation.runImageAnimation(
        Cannonbolt,
        [img`
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f f f f f 1 c f f f f f 5 f 
            . f f 1 1 1 f c 1 f 1 1 1 f f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f 1 f 5 f 1 f f 1 f 5 f 1 f . 
            f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
            f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
            f f f 1 1 f f f f f f 1 1 f f f 
            f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
            f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
            f f 5 f 1 f f 5 5 f f 1 f 5 f f 
            . f 5 f 1 f . f f . f 1 f 5 f . 
            . . f 1 1 1 f . . f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . f f f . f 5 5 5 5 f . f f f . 
            f 5 5 f f f f f f f f f f 5 5 f 
            f 5 f f f f f 1 c f f f f f 5 f 
            . f f 1 1 1 f c 1 f 1 1 1 f f . 
            . f f f f 1 1 f f 1 1 f f f f . 
            . f 1 f f f 1 f f 1 f f f 1 f . 
            f 5 f 1 1 1 1 f f 1 1 1 1 f 5 f 
            f 5 f 1 1 1 1 1 1 1 1 1 1 f 5 f 
            f f f 1 1 f f f f f f 1 1 f f f 
            f 1 f 1 f 1 1 f f 1 1 f 1 f 1 f 
            f 1 f 1 1 1 f f f f 1 1 1 f 1 f 
            . f 5 f 1 f f 5 5 f f 1 f 5 f . 
            . . f 1 1 1 f f f f 1 1 1 f . . 
            . . . f f f . . . . f f f . . . 
            `],
        350,
        true
        )
    }
})
