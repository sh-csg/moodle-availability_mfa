YUI.add('moodle-availability_mfa-form', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/* eslint-disable camelcase */
/**
 * JavaScript for form editing conditions.
 *
 * @module moodle-availability_mfa-form
 */
M.availability_mfa = M.availability_mfa || {};

/**
 * @class M.availability_mfa.form
 *
 * @extends M.core_availability.plugin
 */
M.availability_mfa.form = Y.Object(M.core_availability.plugin);

/**
 * Gets a YUI node representing the controls for this plugin on the form.
 *
 * @param {Object} json
 * @return {Y.Node} YUI node
 */
M.availability_mfa.form.getNode = function(json) {
    var node = Y.Node.create(
        '<span class="form-inline availability_mfa">' + M.util.get_string('title', 'availability_mfa') + '</span>'
    );

    // Add event handlers, save on each change (first time only).
    if (!M.availability_mfa.form.addedEvents) {
        M.availability_mfa.form.addedEvents = true;
    }
    return node;
};

/**
 * Fills in the value from this plugin's controls into a value object,
 * which will later be converted to JSON and stored in the form field.
 *
 * Must be implemented by sub-object; default throws an exception.
 *
 * @method fillValue
 * @param {Object} value Value object (to be written to)
 * @param {Y.Node} node YUI node (same one returned from getNode)
 */
M.availability_mfa.form.fillValue = function(value, node) {
    // Nothing to do here.
};


}, '@VERSION@', {"requires": ["base", "node", "event", "moodle-core_availability-form"]});
