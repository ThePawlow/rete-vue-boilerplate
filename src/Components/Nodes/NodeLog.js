import Rete from 'rete';
import { StringSocket } from '../../System/Sockets';
import { addNodeToLibary } from '../../System/Handler/Nodes';

export default class NodeLog extends Rete.Component {
   constructor() {
      super('Console');
   }

   builder(node) {
      let inp = new Rete.Input('num1', 'Message', StringSocket);

      node.addInput(inp);
   }

   worker(node, inputs, outputs) {}
}
addNodeToLibary(NodeLog, 'Console');
