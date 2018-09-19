new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function() {
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		specialAttack: function() {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player nukes Monster for ' + damage
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},

		nukeAttack: function() {
			var damage = this.calculateDamage(100, 0);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},

		random: function() {
			var damage = this.calculateDamage(-30, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Monster gets hit for a random amount'
			});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		
		elixirPotion: function() {
			if (this.playerHealth <= 40) {
				this.playerHealth += 50;
			} else {
				this.playerHealth = 50;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Magic Elixir used'
			});
		},

		heal: function() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals for 10'
			});
			this.monsterAttacks();
		},
		giveUp: function() {
			this.gameIsRunning = false;
		},
		monsterAttacks: function() {
			var damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});
		},
		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm('You won! New Game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You lost! New Game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});