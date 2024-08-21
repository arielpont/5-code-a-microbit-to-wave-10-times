for (let index = 0; index < 10; index++) {
    sb.setServoPosition(sb.servo(SBServo.ServoA), 20)
    basic.pause(1000)
    sb.setServoPosition(sb.servo(SBServo.ServoA), 80)
    basic.pause(1000)
}
