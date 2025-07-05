import { createNavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { useRoute, RouteProp } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export function navigate(name: keyof ParamListBase, params?: ParamListBase[keyof ParamListBase]) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
}

type AnyRoute = RouteProp<ParamListBase, string>;

export function useRouteParams<T = any>(): T {
    const route = useRoute<AnyRoute>();
    return route.params as T;
}
