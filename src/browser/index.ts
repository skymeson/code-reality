import {registerComponentController, registerSystemController} from "./AFrame";
import {LabelController} from "./component/label/LabelController";
import {IdentityController} from "./component/identity/IdentityController";
import {KeyboardAndMouseDevice} from "./system/interface/device/KeyboardAndMouseDevice";
import {AnimatorController} from "./component/animation/AnimatorController";
import {AvatarController} from "./component/avatar/AvatarController";
import {SpaceSystemController} from "./system/space/SpaceSystemController";
import {registerStateFactory, StateSystemController} from "./system/state/StateSystemController";
import {States} from "./model/States";
import {MovementState} from "./model/MovementState";
import {InterfaceSystemController} from "./system/interface/InterfaceSystemController";
import {InterfaceController} from "./system/interface/InterfaceController";
import {WalkTool} from "./system/interface/tool/WalkTool";
import {PrimaryControllerDevice} from "./system/interface/device/PrimaryControllerDevice";
import {ExampleController} from "./component/ExampleController";
import {ExampleSystemController} from "./system/ExampleSystemController";
import {AddObjectTool} from "./system/interface/tool/AddObjectTool";
import {CollidableController} from "./component/collidable/CollidableController";
import {QuaternionController} from "./component/quaternion/QuaternionController";
import {TeleportTool} from "./system/interface/tool/TeleportTool";
import {ToolSelectorTool} from "./system/interface/tool/ToolSelectorTool";

registerSystemController(ExampleSystemController.DEFINITION);
registerSystemController(InterfaceSystemController.DEFINITION);
registerSystemController(StateSystemController.DEFINITION);
registerSystemController(SpaceSystemController.DEFINITION);

registerComponentController(InterfaceController.DEFINITION);
registerComponentController(ToolSelectorTool.DEFINITION);

registerComponentController(AddObjectTool.DEFINITION);
registerComponentController(WalkTool.DEFINITION);
registerComponentController(TeleportTool.DEFINITION);

registerComponentController(PrimaryControllerDevice.DEFINITION);
registerComponentController(KeyboardAndMouseDevice.DEFINITION);

registerComponentController(ExampleController.DEFINITION);
registerComponentController(CollidableController.DEFINITION);
registerComponentController(AnimatorController.DEFINITION);
registerComponentController(AvatarController.DEFINITION);
registerComponentController(IdentityController.DEFINITION);
registerComponentController(LabelController.DEFINITION);
registerComponentController(QuaternionController.DEFINITION);

registerStateFactory(States.STATE_MOVEMENT, () => { return new MovementState() });

// Set terrain function.
(window as any).TINY_TERRAIN.heightFunctions.set('custom', (x: number, y: number) => {
    const d = Math.sqrt(x*x + y*y);
    return 20 + 20 * ( -1 + 1 / (1 + d * d / 500));
});

// Fix facebook bug adding hash to url
if (window.location.hash && window.location.hash == '#_=_') {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}