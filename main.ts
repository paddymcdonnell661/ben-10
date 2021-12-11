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
	
})
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
