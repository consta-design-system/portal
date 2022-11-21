import { SnackBarItemDefault as Snack } from '@consta/uikit/SnackBar';
import { action, atom } from '@reatom/core';
import { v4 as uuid } from 'uuid';

type AddSnack = Omit<Snack, 'key'> & {
  key?: string | number;
};

export const snackBarAtom = atom<Snack[]>([]);

export const addSnackAction = action((ctx, snack: AddSnack) => {
  snackBarAtom(ctx, [
    ...ctx.get(snackBarAtom),
    { ...snack, key: snack.key || uuid() },
  ]);
});

export const removeSnackAction = action((ctx, key: string | number) => {
  snackBarAtom(
    ctx,
    ctx.get(snackBarAtom).filter((snack) => snack.key !== key),
  );
});
