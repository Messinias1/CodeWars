class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    let damage = this.mario.jumpAttack();
    target.health -= damage;
  }
}
