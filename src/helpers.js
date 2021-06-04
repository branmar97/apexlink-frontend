export default function isObjNotEmpty(obj) {
    return !!obj && obj.constructor === Object && Object.keys(obj).length > 0;
}