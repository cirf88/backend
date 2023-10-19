const {Router} = require('express');
const router = Router();
const {getAmiibos, createAmiibo, getAmiibo, updateAmiibo, deleteAmiibo} = require('../controllers/amiibo.controller');
/**
 * @swagger
 * tags:
 *   name: Amiibo
 *   description: El gestor de los amiibos
 * /api/amiibos:
 *   post:
 *     summary: Crea un nuevo amiibo
 *     tags: [Amiibo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Amiibo'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Amiibo Saved'}
 *       500:
 *         description: Algún error del servidor
  * /api/amiibos/user/{id}:
 *   get:
 *     summary: Devuelve una lista de todos los amiibos del usuario
 *     tags: [Amiibo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del usuario
 *     responses:
 *       200:
 *         description: Esta URL devuelve una lista de todos los amiibo del usuario en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Amiibo'
 * 
 * /api/amiibos/{id}:
 *   get:
 *     summary: Obtener amiibo por id
 *     tags: [Amiibo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del amiibo
 *     responses:
 *       200:
 *         description: Esta URL devuelve el amiibo correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Amiibo'
 *       404:
 *         description: El amiibo no se ha encontrado
 *   put:
 *    summary: Modificar los datos del amiibo
 *    tags: [Amiibo]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del Amiibo
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Amiibo'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si el Amiibo fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Amiibo actualizado'}
 *      404:
 *        description: El amiibo no se ha encontrado
 *      500:
 *        description: Algún error ocurrió
 *   delete:
 *     summary: Eliminar amiibo
 *     tags: [Amiibo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del amiibo
 *
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje si el amiibo pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Amiibos Eliminado'}
 *       404:
 *         description: El amiibo no se ha encontrado
 */
// Esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Amiibo:
 *       type: object
 *       required:
 *         - character
 *         - name
 *         - tail
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del amiibo
 *         character:
 *           type: String
 *           description: El personaje del amiibo
 *         name:
 *           type: String
 *           description: El nombre del amiibo
 *         tail:
 *           type: String
 *           description: El tail al que pertenece el amiibo
 *       example:
 *         id: 6528b7796bd480187b262454
 *         character: Mario
 *         name: Mario
 *         tail: 00000002
 *         idUsuario: 6524d14e82ea98549a4e27ad 
 */
router.route('/user/:id')
    .get(getAmiibos)
router.route('/')
    .post(createAmiibo)
router.route('/:id')
    .get(getAmiibo)
    .put(updateAmiibo)
    .delete(deleteAmiibo)

module.exports = router;