import WaveSurfer from 'wavesurfer.js';
export class WSAudioPlayer {
    watchHandler(newValue) {
        this.wsPlayer.load(newValue);
    }
    create() {
        let ws = WaveSurfer;
        let container = this.el.shadowRoot.querySelector('#wavesurfer');
        this.wsPlayer = ws.create({
            container: container,
            waveColor: this.color,
            progressColor: '#666666',
            height: this.height
        });
        if (!this.theme) {
            this.themeSetting = 'basic';
        }
        else {
            this.themeSetting = this.theme;
        }
        this.wsPlayer.load(this.audio);
        this.wsPlayer.on('ready', () => {
            this.duration = this.formatTime(this.wsPlayer.getDuration());
            this.curTime = this.formatTime(this.wsPlayer.getCurrentTime());
        });
        this.isPlaying = this.wsPlayer.isPlaying();
        this.wsPlayer.on('audioprocess', () => {
            this.curTime = this.getCurrentTime();
        });
        this.wsPlayer.on('seek', () => {
            this.curTime = this.getCurrentTime();
        });
    }
    playpause() {
        this.wsPlayer.playPause();
        this.isPlaying = this.wsPlayer.isPlaying();
        this.curTime = this.getCurrentTime();
    }
    componentDidLoad() {
        this.create();
    }
    getCurrentTime() {
        return this.formatTime(this.wsPlayer.getCurrentTime());
    }
    formatTime(time) {
        let sec_num = parseInt(time, 10);
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);
        let hoursStr = hours.toString();
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();
        if (hours < 10) {
            hoursStr = "0" + hoursStr;
        }
        if (minutes < 10) {
            minutesStr = "0" + minutesStr;
        }
        if (seconds < 10) {
            secondsStr = "0" + secondsStr;
        }
        if (hours > 0) {
            return hoursStr + ':' + minutesStr + ':' + secondsStr;
        }
        else {
            return minutesStr + ':' + secondsStr;
        }
    }
    render() {
        return h("div", { class: 'wsap-container ' + this.themeSetting },
            h("div", { class: "player-header" },
                h("div", { class: "title" },
                    h("h3", null, this.title)),
                h("div", { class: "current-time" }, this.curTime),
                h("div", { class: "total-time" }, this.duration)),
            h("div", { class: "player-main" },
                h("div", { class: "wsap-left-controls" },
                    h("button", { class: "play-pause", onClick: () => this.playpause() },
                        h("div", { class: "symbol " + (this.isPlaying ? ' paused' : 'playing') }))),
                h("div", { id: "wavesurfer" })));
    }
    static get is() { return "ws-audio-player"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "audio": {
            "type": String,
            "attr": "audio",
            "watchCallbacks": ["watchHandler"]
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "create": {
            "method": true
        },
        "curTime": {
            "state": true
        },
        "duration": {
            "type": String,
            "attr": "duration",
            "mutable": true
        },
        "el": {
            "elementRef": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "isPlaying": {
            "state": true
        },
        "playpause": {
            "method": true
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "/**style-placeholder:ws-audio-player:**/"; }
}
