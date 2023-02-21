export default class Utils {
    static hasEmpty = <T>(target: T): boolean => {
        for (var member in target) {
            if (!target[member])
                return true;
        }
        return false;
    }

    static whichEmptyMember = <T>(target: T) => {
        const members = [];
        for (var member in target) {
            if (!target[member])
                members.push(member);
        }
        return members;
    }
}