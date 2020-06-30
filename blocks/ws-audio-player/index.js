/**
 * Block dependencies
 */
import icons from './icons';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    InspectorControls,
    MediaUpload,MediaUploadCheck
} = wp.editor;
const {
    Button
} = wp.components;


/**
  * Register block
 */
export default registerBlockType(
    'bizzleblocks/ws-audio-player',
    {
        title: __( 'WaveSurfer Audio Player', 'bizzleblocks' ),
        description: __( 'An Audio Player Widget That Generates The Waveforms for Audio', 'bizzleblocks'),
        category: 'common',
        icon: icons.wsPlayer,
        keywords: [
            __( 'Audio', 'bizzleblocks' ),
            __( 'Player', 'bizzleblocks' ),
            __( 'Waveform', 'bizzleblocks' ),
        ],
        attributes: {
            audio: {
                type: 'string',
                source: 'attribute',
                selector: 'ws-audio-player',
                attribute: 'audio',
                default: '/media/'
            },
            title: {
                type: 'string',
                source: 'attribute',
                selector: 'ws-audio-player',
                attribute: 'title',
                default: 'New Audio Title'
            },
            color: {
                type: 'string',
                source: 'attribute',
                selector: 'ws-audio-player',
                attribute: 'color',
                default: 'Red'
            },
            height: {
                type: 'string',
                source: 'attribute',
                selector: 'ws-audio-player',
                attribute: 'height',
                default: '100'
            },
            mediaId: {
                type: 'string',
                source: 'attribute',
                selector: 'ws-audio-player',
                attribute: 'mediaId',
                default: '0'
            }
        },
        edit: props => {
            const { setAttributes } = props;
            const ALLOWED_MEDIA_TYPES = ['audio/mpeg'];
            const mediaId = '';
            const onChangeTitle = (e) => {setAttributes( {title: e.currentTarget.value} ) };
            const onChangeURL = (e) => setAttributes( { audio: e.currentTarget.value } );
            const onChangeColor = (e) => setAttributes( { color: e.currentTarget.value } );
            const onChangeHeight = (e) => setAttributes( { height: e.currentTarget.value } );
            const onChangeAudio = (e) => setAttributes( {audio: e.url} );

            return [
                <InspectorControls>
                    <div class="components-block-description">
                        <p>API Tester Block Options </p>
                    </div>
                    <p><label>Audio File Location: </label>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ ( media ) => onChangeAudio(media) }
                                allowedTypes={ ALLOWED_MEDIA_TYPES }
                                value={ mediaId }
                                render={ ( { open } ) => (
                                    <Button onClick={ open } isPrimary={true}>
                                        Open Media Library
                                    </Button>
                                ) }
                            />
                        </MediaUploadCheck>
                    <input  type="text" value={props.attributes.audio} onChange={onChangeURL} /></p>
                    <p><label>Title: </label><input type="text" value={props.attributes.title} onChange={onChangeTitle} /></p>
                    <p><label>Color: </label><input type="text" value={props.attributes.color} onChange={onChangeColor} /></p>
                    <p><label>Height: </label><input type="number" value={props.attributes.height} onChange={onChangeHeight} /></p>
                </InspectorControls>
                ,
                <ws-audio-player audio={ props.attributes.audio} title={props.attributes.title} color={props.attributes.color} height={props.attributes.height}></ws-audio-player>
            ];
        },
        save: props => {
            return (
                <ws-audio-player
                    audio={props.attributes.audio}
                    title={props.attributes.title}
                    color={props.attributes.color}
                    height={props.attributes.height}
                >
                </ws-audio-player>
            );
        },

    },
);
