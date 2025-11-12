<?php
/**
 * Plugin Name: Hero Block
 * Description: Bloque Hero con Tailwind 4 y React.
 * Version: 1.0.0
 */

function hero_block_register() {
    register_block_type(__DIR__);
}
add_action('init', 'hero_block_register');
