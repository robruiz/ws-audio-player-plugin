<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Wavesufer Audio Player Plugin
 * @author      Rob Ruiz (@robcruiz)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Wavesurfer Audio Player Block
 * Plugin URI:  https://bizzledesigns.com/wavesurfer-audio-player
 * Description: A plugin that adds the Wavesurfer Audio Player Web Component to WordPress
 * Version:     1.0
 * Author:      Rob Ruiz
 * Author URI:  https://twitter.com/robcruiz
 * Text Domain: bizzleblocks
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace WavesurferAudioPlayer;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';

