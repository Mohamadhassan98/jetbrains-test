export interface AdminBillResponse {
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  BillId?: number;
  /**
   *
   * @type {AdminBillCouponUsageResponse}
   * @memberof AdminBillResponse
   */
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  BillPrice?: number | null;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  BillCode?: string | null;
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  CreationSource?: number;
  /**
   *
   * @type {CreationSourceResponse}
   * @memberof AdminBillResponse
   */
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  FinalizationTime?: string | null;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  Mobile?: string | null;
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  Count?: number;
  /**
   *
   * @type {Array<AdminReserveResponse>}
   * @memberof AdminBillResponse
   */
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  Status?: number;
  /**
   *
   * @type {AdminUserResponse}
   * @memberof AdminBillResponse
   */
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  Email?: string | null;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  Phone?: string | null;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  Fax?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof AdminBillResponse
   */
  Operator?: boolean;
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  OperatorId?: number | null;
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  AdultCount?: number;
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  ChildCount?: number;
  /**
   *
   * @type {number}
   * @memberof AdminBillResponse
   */
  InfantCount?: number;
  /**
   *
   * @type {boolean}
   * @memberof AdminBillResponse
   */
  IsOrganizational?: boolean;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  UserAgent?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof AdminBillResponse
   */
  International?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof AdminBillResponse
   */
  ForceCancel?: boolean;
  /**
   *
   * @type {string}
   * @memberof AdminBillResponse
   */
  PlayerId?: string | null;
}

export class AdminBillResponseImpl implements AdminBillResponse {
  ForceCancel = false;
  BillCode = '';
}
