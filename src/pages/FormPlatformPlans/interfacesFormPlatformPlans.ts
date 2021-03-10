export interface ParamsAttribute {
  planName: string;
}

export interface PlatformPlansAPIData {
  planos: PlatformsPlansAttributes[];
}

export interface PlatformsPlansAttributes {
  sku: string;
  franquia: string;
  valor: string;
  aparelho?: {
    nome: string;
    valor: string;
    numeroParcelas: number;
    valorParcela: string | boolean;
  };
  ativo: boolean;
}

export interface UserChoose extends PlatformsPlansAttributes {
  planName: string;
}
