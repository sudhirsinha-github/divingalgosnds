import { assert } from 'chai';
import newTree from '../../../../main/javascript/algosnds/trees/random-node';

describe('Tree implementation than can retrieve an any random node with equal probability', () => {
    it('Insert node into tree', () => {
        const tree = newTree();
        tree.insertInOrder(20);
        assert.equal(tree.find(20).data, 20);

        tree.insertInOrder(10);
        assert.equal(tree.find(20).data, 20);
        assert.equal(tree.find(10).data, 10);

        assert.isUndefined(tree.find(100));
    });
    it('Find node from tree');
    it('Delete node from tree', () => {
        const tree = newTree();

        tree.insertInOrder(20);
        tree.insertInOrder(15);
        tree.insertInOrder(25);

        tree.insertInOrder(9);
        tree.insertInOrder(17);
        tree.insertInOrder(23);
        tree.insertInOrder(28);

        tree.insertInOrder(8);
        tree.insertInOrder(10);
        tree.insertInOrder(27);
        tree.insertInOrder(30);

        tree.insertInOrder(6);
        tree.insertInOrder(7);
        tree.insertInOrder(26);

        assertDeletion(tree, 7);
        assertDeletion(tree, 6);
        assertDeletion(tree, 25);
    });

    function assertDeletion(tree, nodeData) {
        assert.isDefined(tree.find(nodeData));
        tree.deleteNode(nodeData);
        assert.isUndefined(tree.find(nodeData));
    }
    it('Fetch random node from tree');
});