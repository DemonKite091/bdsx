import { abstract } from "bdsx/common";
import { RawTypeId } from "bdsx/makefunc";
import { defineNative, MantleClass, NativeClass, nativeField } from "bdsx/nativeclass";
import { int32_t, uint32_t } from "bdsx/nativetype";
import { CxxStringWrapper } from "bdsx/pointer";
import { SharedPointer, SharedPtr } from "bdsx/sharedpointer";
import { NetworkIdentifier } from "./networkidentifier";
import { MinecraftPacketIds } from "./packetids";
import { procHacker } from "./proc";
import { BinaryStream } from "./stream";

// export interface PacketType<T> extends StructureType<T>
// {
//     readonly ID:number;
// }

export const PacketReadResult = uint32_t.extends({
    PacketReadNoError: 0,
    PacketReadError: 1,
});
export type PacketReadResult = uint32_t;


export const StreamReadResult = int32_t.extends({
    Disconnect: 0,
    Pass: 1,
    Warning: 2, // disconnect at 3 times
    Ignore: 0x7f,
});
export type StreamReadResult = int32_t;

@defineNative()
export class ExtendedStreamReadResult extends NativeClass {
    @nativeField(StreamReadResult)
	streamReadResult:StreamReadResult;
    @nativeField(int32_t)
	dummy:int32_t;
	// array?
}

const sharedptr_of_packet = Symbol('sharedptr');

@defineNative(0x28)
export class Packet extends MantleClass {
    static ID:number;
    [sharedptr_of_packet]?:SharedPtr<any>|null;
    
    /**
     * @deprecated use packet.destruct();
     */
    destructor():void {
        abstract();
    }
    getId():MinecraftPacketIds {
        abstract();
    }
    getName(name:CxxStringWrapper):void {
        abstract();
    }
    write(stream:BinaryStream):void {
        abstract();
    }
    read(stream:BinaryStream):PacketReadResult {
        abstract();
    }
    readExtended(read:ExtendedStreamReadResult, stream:BinaryStream):ExtendedStreamReadResult {
        abstract();
    }

    /**
     * same with target.send
     */
    sendTo(target:NetworkIdentifier, unknownarg?:number):void {
        abstract();
    }
    dispose():void {
        this[sharedptr_of_packet]!.dispose();
        this[sharedptr_of_packet] = null;
    }

    static create<T extends Packet>(this:{new():T, ID:number, ref():any}):T {
        const id = this.ID;
        if (id === undefined) throw Error('Packet class is abstract, please use named class instead (ex. LoginPacket)');
        const cls = SharedPtr.make(this);
        const sharedptr = new cls(true);
        createPacketRaw(sharedptr, id);
        
        const packet = sharedptr.p as T;
        packet[sharedptr_of_packet] = sharedptr;
        return packet;
    }
}

export const PacketSharedPtr = SharedPtr.make(Packet);
export type PacketSharedPtr = SharedPtr<Packet>;

/**
 * @deprecated use *Packet.create() instead
 */
export function createPacket(packetId:MinecraftPacketIds):SharedPointer {
    const p = new PacketSharedPtr(true);
    createPacketRaw(p, packetId);
    return new SharedPointer(p);
}

export const createPacketRaw = procHacker.js("MinecraftPackets::createPacket", PacketSharedPtr, null, PacketSharedPtr, RawTypeId.Int32);
