import '../../stencil.core';
export declare class WSAudioPlayer {
    /**
     * The Link To The Audio File
     */
    audio: string;
    /**
     * The waveform color
     */
    color: string;
    /**
     * The player theme
     */
    theme: string;
    /**
     * The Track Title
     */
    title: string;
    duration: string;
    /**
     * Whether or not the player is playing
     */
    isPlaying: string;
    curTime: string;
    watchHandler(newValue: boolean): void;
    /**
     * The height of the waveform
     */
    height: string;
    el: HTMLElement;
    wsPlayer: any;
    themeSetting: any;
    create(): void;
    playpause(): void;
    componentDidLoad(): void;
    getCurrentTime(): string;
    formatTime(time: any): string;
    render(): JSX.Element;
}
