'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


var emptyObj = function emptyObj() {
  return {};
};

exports.default = {
  // General
  data: [],
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  // eslint-disable-next-line no-unused-vars
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  // eslint-disable-next-line no-unused-vars
  defaultSortMethod: function defaultSortMethod(a, b, desc) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableComponent: function TableComponent(_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('rt-table', className),
        role: 'grid'
        // tabIndex='0'
      }, rest),
      children
    );
  },
  TheadComponent: _utils2.default.makeTemplateComponent('rt-thead', 'Thead'),
  TbodyComponent: _utils2.default.makeTemplateComponent('rt-tbody', 'Tbody'),
  TrGroupComponent: function TrGroupComponent(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        rest = _objectWithoutProperties(_ref2, ['children', 'className']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('rt-tr-group', className),
        role: 'rowgroup'
      }, rest),
      children
    );
  },
  TrComponent: function TrComponent(_ref3) {
    var children = _ref3.children,
        className = _ref3.className,
        rest = _objectWithoutProperties(_ref3, ['children', 'className']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('rt-tr', className),
        role: 'row'
      }, rest),
      children
    );
  },
  ThComponent: function ThComponent(_ref4) {
    var toggleSort = _ref4.toggleSort,
        className = _ref4.className,
        children = _ref4.children,
        rest = _objectWithoutProperties(_ref4, ['toggleSort', 'className', 'children']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('rt-th', className),
        onClick: function onClick(e) {
          return toggleSort && toggleSort(e);
        },
        role: 'columnheader',
        tabIndex: '-1' // Resolves eslint issues without implementing keyboard navigation incorrectly
      }, rest),
      children
    );
  },
  TdComponent: function TdComponent(_ref5) {
    var toggleSort = _ref5.toggleSort,
        className = _ref5.className,
        children = _ref5.children,
        rest = _objectWithoutProperties(_ref5, ['toggleSort', 'className', 'children']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('rt-td', className),
        role: 'gridcell'
      }, rest),
      children
    );
  },
  TfootComponent: _utils2.default.makeTemplateComponent('rt-tfoot', 'Tfoot'),
  FilterComponent: function FilterComponent(_ref6) {
    var filter = _ref6.filter,
        _onChange = _ref6.onChange;

    var rerender = function rerender() {

      _react2.default.renderComponent(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          filter ? filter.value : ''
        ),
        _react2.default.createElement('input', {
          type: 'text',
          style: {
            width: '100%'
          },
          value: filter ? filter.value : '',
          onChange: function onChange(event) {
            _onChange(event.target.value);
            rerender();
          }
        })
      ));
    };
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        filter ? filter.value : ''
      ),
      _react2.default.createElement('input', {
        type: 'text',
        style: {
          width: '100%'
        },
        value: filter ? filter.value : '',
        onChange: function onChange(event) {
          _onChange(event.target.value);
          rerender();
        }
      })
    );
  },
  ExpanderComponent: function ExpanderComponent(_ref7) {
    var isExpanded = _ref7.isExpanded;
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('rt-expander', isExpanded && '-open') },
      '\u2022'
    );
  },
  PivotValueComponent: function PivotValueComponent(_ref8) {
    var subRows = _ref8.subRows,
        value = _ref8.value;
    return _react2.default.createElement(
      'span',
      null,
      value,
      ' ',
      subRows && '(' + subRows.length + ')'
    );
  },
  AggregatedComponent: function AggregatedComponent(_ref9) {
    var subRows = _ref9.subRows,
        column = _ref9.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        _react2.default.createElement(
          'span',
          { key: i },
          row[column.id],
          i < subRows.length - 1 ? ', ' : ''
        )
      );
    });
    return _react2.default.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: _pagination2.default,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref10) {
    var className = _ref10.className,
        loading = _ref10.loading,
        loadingText = _ref10.loadingText,
        rest = _objectWithoutProperties(_ref10, ['className', 'loading', 'loadingText']);

    return _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)('-loading', { '-active': loading }, className)
      }, rest),
      _react2.default.createElement(
        'div',
        { className: '-loading-inner' },
        loadingText
      )
    );
  },
  NoDataComponent: _utils2.default.makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: _utils2.default.makeTemplateComponent('rt-resizer', 'Resizer'),
  PadRowComponent: function PadRowComponent() {
    return _react2.default.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiZW1wdHlPYmoiLCJkYXRhIiwibG9hZGluZyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZU9wdGlvbnMiLCJkZWZhdWx0UGFnZVNpemUiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwiZmlsdGVyIiwicm93IiwiY29sdW1uIiwiaWQiLCJwaXZvdElkIiwidW5kZWZpbmVkIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInZhbHVlIiwiZGVmYXVsdFNvcnRNZXRob2QiLCJhIiwiYiIsImRlc2MiLCJ0b0xvd2VyQ2FzZSIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5IiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsIkNlbGwiLCJIZWFkZXIiLCJGb290ZXIiLCJBZ2dyZWdhdGVkIiwiUGl2b3QiLCJQaXZvdFZhbHVlIiwiRXhwYW5kZXIiLCJGaWx0ZXIiLCJzaG93IiwibWluV2lkdGgiLCJhZ2dyZWdhdGUiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImdldEhlYWRlclByb3BzIiwiZm9vdGVyQ2xhc3NOYW1lIiwiZm9vdGVyU3R5bGUiLCJnZXRGb290ZXJQcm9wcyIsImZpbHRlck1ldGhvZCIsImZpbHRlckFsbCIsInNvcnRNZXRob2QiLCJleHBhbmRlckRlZmF1bHRzIiwid2lkdGgiLCJwaXZvdERlZmF1bHRzIiwicHJldmlvdXNUZXh0IiwibmV4dFRleHQiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJwYWdlVGV4dCIsIm9mVGV4dCIsInJvd3NUZXh0IiwiVGFibGVDb21wb25lbnQiLCJjaGlsZHJlbiIsInJlc3QiLCJUaGVhZENvbXBvbmVudCIsIm1ha2VUZW1wbGF0ZUNvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJ0b2dnbGVTb3J0IiwiZSIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJvbkNoYW5nZSIsInJlcmVuZGVyIiwicmVuZGVyQ29tcG9uZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJFeHBhbmRlckNvbXBvbmVudCIsImlzRXhwYW5kZWQiLCJQaXZvdFZhbHVlQ29tcG9uZW50Iiwic3ViUm93cyIsImxlbmd0aCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJwcmV2aWV3VmFsdWVzIiwiZCIsIm1hcCIsImkiLCJQaXZvdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7OztBQUZBOzs7QUFJQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFPLEVBQVA7QUFBQSxDQUFqQjs7a0JBRWU7QUFDYjtBQUNBQyxRQUFNLEVBRk87QUFHYkMsV0FBUyxLQUhJO0FBSWJDLGtCQUFnQixJQUpIO0FBS2JDLHFCQUFtQixLQUxOO0FBTWJDLHdCQUFzQixJQU5UO0FBT2JDLHVCQUFxQixJQVBSO0FBUWJDLG1CQUFpQixDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0FSSjtBQVNiQyxtQkFBaUIsRUFUSjtBQVViQyxnQkFBYyxJQVZEO0FBV2JDLDJCQUF5QixJQVhaO0FBWWJDLHdCQUFzQixJQVpUO0FBYWJDLHdCQUFzQixJQWJUO0FBY2JDLHNCQUFvQixLQWRQO0FBZWJDLFlBQVUsSUFmRztBQWdCYkMsYUFBVyxJQWhCRTtBQWlCYkMsYUFBVyxJQWpCRTtBQWtCYkMsY0FBWSxLQWxCQztBQW1CYkMsbUJBQWlCLEtBbkJKO0FBb0JiQyxpQkFBZSxFQXBCRjtBQXFCYkMsbUJBQWlCLEVBckJKO0FBc0JiQyxrQkFBZ0IsRUF0Qkg7QUF1QmJDLG1CQUFpQixFQXZCSjtBQXdCYjtBQUNBQyx1QkFBcUIsNkJBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxNQUFkLEVBQXlCO0FBQzVDLFFBQU1DLEtBQUtILE9BQU9JLE9BQVAsSUFBa0JKLE9BQU9HLEVBQXBDO0FBQ0EsV0FBT0YsSUFBSUUsRUFBSixNQUFZRSxTQUFaLEdBQ0hDLE9BQU9MLElBQUlFLEVBQUosQ0FBUCxFQUFnQkksVUFBaEIsQ0FBMkJQLE9BQU9RLEtBQWxDLENBREcsR0FFSCxJQUZKO0FBR0QsR0E5Qlk7QUErQmI7QUFDQUMscUJBQW1CLDJCQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsSUFBUCxFQUFnQjtBQUNqQztBQUNBRixRQUFJQSxNQUFNLElBQU4sSUFBY0EsTUFBTUwsU0FBcEIsR0FBZ0MsRUFBaEMsR0FBcUNLLENBQXpDO0FBQ0FDLFFBQUlBLE1BQU0sSUFBTixJQUFjQSxNQUFNTixTQUFwQixHQUFnQyxFQUFoQyxHQUFxQ00sQ0FBekM7QUFDQTtBQUNBRCxRQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLEdBQXdCQSxFQUFFRyxXQUFGLEVBQXhCLEdBQTBDSCxDQUE5QztBQUNBQyxRQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLEdBQXdCQSxFQUFFRSxXQUFGLEVBQXhCLEdBQTBDRixDQUE5QztBQUNBO0FBQ0EsUUFBSUQsSUFBSUMsQ0FBUixFQUFXO0FBQ1QsYUFBTyxDQUFQO0FBQ0Q7QUFDRCxRQUFJRCxJQUFJQyxDQUFSLEVBQVc7QUFDVCxhQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0Q7QUFDQTtBQUNBLFdBQU8sQ0FBUDtBQUNELEdBakRZOztBQW1EYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBRyxnQkFBY1QsU0E1REQ7QUE2RGJVLG9CQUFrQlYsU0E3REw7QUE4RGJXLGtCQUFnQlgsU0E5REg7QUErRGJZLG9CQUFrQlosU0EvREw7QUFnRWJhLG1CQUFpQmIsU0FoRUo7QUFpRWJjLG9CQUFrQmQsU0FqRUw7O0FBbUViO0FBQ0FlLFdBQVNmLFNBcEVJOztBQXNFYjtBQUNBZ0IsZUFBYSxXQXZFQTtBQXdFYkMsY0FBWSxVQXhFQztBQXlFYkMsY0FBWSxVQXpFQztBQTBFYkMsaUJBQWUsYUExRUY7QUEyRWJDLG1CQUFpQixlQTNFSjtBQTRFYkMsZUFBYSxXQTVFQTtBQTZFYkMsWUFBVSxRQTdFRztBQThFYkMscUJBQW1CLGlCQTlFTjs7QUFnRmI7QUFDQUMsZUFBYTtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBakZBOztBQW1GYjtBQUNBQyxhQUFXLEVBcEZFO0FBcUZiQyxTQUFPLEVBckZNOztBQXVGYjtBQUNBQyxZQUFVeEQsUUF4Rkc7QUF5RmJ5RCxpQkFBZXpELFFBekZGO0FBMEZiMEQsc0JBQW9CMUQsUUExRlA7QUEyRmIyRCx3QkFBc0IzRCxRQTNGVDtBQTRGYjRELHdCQUFzQjVELFFBNUZUO0FBNkZiNkQsaUJBQWU3RCxRQTdGRjtBQThGYjhELG1CQUFpQjlELFFBOUZKO0FBK0ZiK0QsbUJBQWlCL0QsUUEvRko7QUFnR2JnRSx1QkFBcUJoRSxRQWhHUjtBQWlHYmlFLHlCQUF1QmpFLFFBakdWO0FBa0dia0UseUJBQXVCbEUsUUFsR1Y7QUFtR2JtRSxpQkFBZW5FLFFBbkdGO0FBb0dib0UsbUJBQWlCcEUsUUFwR0o7QUFxR2JxRSxjQUFZckUsUUFyR0M7QUFzR2JzRSxjQUFZdEUsUUF0R0M7QUF1R2J1RSxpQkFBZXZFLFFBdkdGO0FBd0did0UsbUJBQWlCeEUsUUF4R0o7QUF5R2J5RSxtQkFBaUJ6RSxRQXpHSjtBQTBHYjBFLHNCQUFvQjFFLFFBMUdQO0FBMkdiMkUsbUJBQWlCM0UsUUEzR0o7QUE0R2I0RSxrQkFBZ0I1RSxRQTVHSDtBQTZHYjZFLG1CQUFpQjdFLFFBN0dKOztBQStHYjtBQUNBMEIsVUFBUTtBQUNOO0FBQ0FvRCxVQUFNakQsU0FGQTtBQUdOa0QsWUFBUWxELFNBSEY7QUFJTm1ELFlBQVFuRCxTQUpGO0FBS05vRCxnQkFBWXBELFNBTE47QUFNTnFELFdBQU9yRCxTQU5EO0FBT05zRCxnQkFBWXRELFNBUE47QUFRTnVELGNBQVV2RCxTQVJKO0FBU053RCxZQUFReEQsU0FURjtBQVVOO0FBQ0FmLGNBQVVlLFNBWEosRUFXZTtBQUNyQmIsZUFBV2EsU0FaTCxFQVlnQjtBQUN0QlosZ0JBQVlZLFNBYk4sRUFhaUI7QUFDdkJ5RCxVQUFNLElBZEE7QUFlTkMsY0FBVSxHQWZKO0FBZ0JOO0FBQ0FqQyxlQUFXLEVBakJMO0FBa0JOQyxXQUFPLEVBbEJEO0FBbUJOQyxjQUFVeEQsUUFuQko7QUFvQk47QUFDQXdGLGVBQVczRCxTQXJCTDtBQXNCTjtBQUNBNEQscUJBQWlCLEVBdkJYO0FBd0JOQyxpQkFBYSxFQXhCUDtBQXlCTkMsb0JBQWdCM0YsUUF6QlY7QUEwQk47QUFDQTRGLHFCQUFpQixFQTNCWDtBQTRCTkMsaUJBQWEsRUE1QlA7QUE2Qk5DLG9CQUFnQjlGLFFBN0JWO0FBOEJOK0Ysa0JBQWNsRSxTQTlCUjtBQStCTm1FLGVBQVcsS0EvQkw7QUFnQ05DLGdCQUFZcEU7QUFoQ04sR0FoSEs7O0FBbUpiO0FBQ0FxRSxvQkFBa0I7QUFDaEJwRixjQUFVLEtBRE07QUFFaEJFLGVBQVcsS0FGSztBQUdoQkMsZ0JBQVksS0FISTtBQUloQmtGLFdBQU87QUFKUyxHQXBKTDs7QUEySmJDLGlCQUFlO0FBQ2I7QUFEYSxHQTNKRjs7QUErSmI7QUFDQUMsZ0JBQWMsVUFoS0Q7QUFpS2JDLFlBQVUsTUFqS0c7QUFrS2JDLGVBQWEsWUFsS0E7QUFtS2JDLGNBQVksZUFuS0M7QUFvS2JDLFlBQVUsTUFwS0c7QUFxS2JDLFVBQVEsSUFyS0s7QUFzS2JDLFlBQVUsTUF0S0c7O0FBd0tiO0FBQ0FDLGtCQUFnQjtBQUFBLFFBQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFFBQWF2RCxTQUFiLFFBQWFBLFNBQWI7QUFBQSxRQUEyQndELElBQTNCOztBQUFBLFdBQ2Q7QUFBQTtBQUFBO0FBQ0UsbUJBQVcsMEJBQVcsVUFBWCxFQUF1QnhELFNBQXZCLENBRGI7QUFFRSxjQUFLO0FBQ0w7QUFIRixTQUlNd0QsSUFKTjtBQU1HRDtBQU5ILEtBRGM7QUFBQSxHQXpLSDtBQW1MYkUsa0JBQWdCLGdCQUFFQyxxQkFBRixDQUF3QixVQUF4QixFQUFvQyxPQUFwQyxDQW5MSDtBQW9MYkMsa0JBQWdCLGdCQUFFRCxxQkFBRixDQUF3QixVQUF4QixFQUFvQyxPQUFwQyxDQXBMSDtBQXFMYkUsb0JBQWtCO0FBQUEsUUFBR0wsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYXZELFNBQWIsU0FBYUEsU0FBYjtBQUFBLFFBQTJCd0QsSUFBM0I7O0FBQUEsV0FDaEI7QUFBQTtBQUFBO0FBQ0UsbUJBQVcsMEJBQVcsYUFBWCxFQUEwQnhELFNBQTFCLENBRGI7QUFFRSxjQUFLO0FBRlAsU0FHTXdELElBSE47QUFLR0Q7QUFMSCxLQURnQjtBQUFBLEdBckxMO0FBOExiTSxlQUFhO0FBQUEsUUFBR04sUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYXZELFNBQWIsU0FBYUEsU0FBYjtBQUFBLFFBQTJCd0QsSUFBM0I7O0FBQUEsV0FDWDtBQUFBO0FBQUE7QUFDRSxtQkFBVywwQkFBVyxPQUFYLEVBQW9CeEQsU0FBcEIsQ0FEYjtBQUVFLGNBQUs7QUFGUCxTQUdNd0QsSUFITjtBQUtHRDtBQUxILEtBRFc7QUFBQSxHQTlMQTtBQXVNYk8sZUFBYTtBQUFBLFFBQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFFBQWUvRCxTQUFmLFNBQWVBLFNBQWY7QUFBQSxRQUEwQnVELFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBLFFBQXVDQyxJQUF2Qzs7QUFBQSxXQUNYO0FBQUE7QUFBQTtBQUNFLG1CQUFXLDBCQUFXLE9BQVgsRUFBb0J4RCxTQUFwQixDQURiO0FBRUUsaUJBQVM7QUFBQSxpQkFDUCtELGNBQWNBLFdBQVdDLENBQVgsQ0FEUDtBQUFBLFNBRlg7QUFLRSxjQUFLLGNBTFA7QUFNRSxrQkFBUyxJQU5YLENBTWdCO0FBTmhCLFNBT01SLElBUE47QUFTR0Q7QUFUSCxLQURXO0FBQUEsR0F2TUE7QUFvTmJVLGVBQWE7QUFBQSxRQUFHRixVQUFILFNBQUdBLFVBQUg7QUFBQSxRQUFlL0QsU0FBZixTQUFlQSxTQUFmO0FBQUEsUUFBMEJ1RCxRQUExQixTQUEwQkEsUUFBMUI7QUFBQSxRQUF1Q0MsSUFBdkM7O0FBQUEsV0FDWDtBQUFBO0FBQUE7QUFDRSxtQkFBVywwQkFBVyxPQUFYLEVBQW9CeEQsU0FBcEIsQ0FEYjtBQUVFLGNBQUs7QUFGUCxTQUdNd0QsSUFITjtBQUtHRDtBQUxILEtBRFc7QUFBQSxHQXBOQTtBQTZOYlcsa0JBQWdCLGdCQUFFUixxQkFBRixDQUF3QixVQUF4QixFQUFvQyxPQUFwQyxDQTdOSDtBQThOYlMsbUJBQWlCLGdDQUEwQjtBQUFBLFFBQXZCakcsTUFBdUIsU0FBdkJBLE1BQXVCO0FBQUEsUUFBZmtHLFNBQWUsU0FBZkEsUUFBZTs7QUFDekMsUUFBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQU07O0FBRWYsc0JBQU1DLGVBQU4sQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBT3BHLGdCQUFELEdBQVdBLE9BQU9RLEtBQWxCLEdBQTBCO0FBQWhDLFNBREo7QUFFSTtBQUNJLGdCQUFLLE1BRFQ7QUFFSSxpQkFBTztBQUNIbUUsbUJBQU87QUFESixXQUZYO0FBS0ksaUJBQU8zRSxTQUFTQSxPQUFPUSxLQUFoQixHQUF3QixFQUxuQztBQU1JLG9CQUFVLHlCQUFTO0FBQ2YwRixzQkFBU0csTUFBTUMsTUFBTixDQUFhOUYsS0FBdEI7QUFDQTJGO0FBQ0g7QUFUTDtBQUZKLE9BREo7QUFpQkwsS0FuQkg7QUFvQkEsV0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBT25HLGNBQUQsR0FBV0EsT0FBT1EsS0FBbEIsR0FBMEI7QUFBaEMsT0FERjtBQUVFO0FBQ0UsY0FBSyxNQURQO0FBRUUsZUFBTztBQUNMbUUsaUJBQU87QUFERixTQUZUO0FBS0UsZUFBTzNFLFNBQVNBLE9BQU9RLEtBQWhCLEdBQXdCLEVBTGpDO0FBTUUsa0JBQVUseUJBQVM7QUFDakIwRixvQkFBU0csTUFBTUMsTUFBTixDQUFhOUYsS0FBdEI7QUFDQTJGO0FBQ0Q7QUFUSDtBQUZGLEtBREE7QUFlQSxHQWxRVztBQW1RYkkscUJBQW1CO0FBQUEsUUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsV0FDakI7QUFBQTtBQUFBLFFBQUssV0FBVywwQkFBVyxhQUFYLEVBQTBCQSxjQUFjLE9BQXhDLENBQWhCO0FBQUE7QUFBQSxLQURpQjtBQUFBLEdBblFOO0FBd1FiQyx1QkFBcUI7QUFBQSxRQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxRQUFZbEcsS0FBWixTQUFZQSxLQUFaO0FBQUEsV0FDbkI7QUFBQTtBQUFBO0FBQ0dBLFdBREg7QUFBQTtBQUNXa0csdUJBQWVBLFFBQVFDLE1BQXZCO0FBRFgsS0FEbUI7QUFBQSxHQXhRUjtBQTZRYkMsdUJBQXFCLG9DQUF5QjtBQUFBLFFBQXRCRixPQUFzQixTQUF0QkEsT0FBc0I7QUFBQSxRQUFieEcsTUFBYSxTQUFiQSxNQUFhOztBQUM1QyxRQUFNMkcsZ0JBQWdCSCxRQUNuQjFHLE1BRG1CLENBQ1o7QUFBQSxhQUFLLE9BQU84RyxFQUFFNUcsT0FBT0MsRUFBVCxDQUFQLEtBQXdCLFdBQTdCO0FBQUEsS0FEWSxFQUVuQjRHLEdBRm1CLENBRWYsVUFBQzlHLEdBQUQsRUFBTStHLENBQU47QUFBQTtBQUNIO0FBQ0E7QUFBQTtBQUFBLFlBQU0sS0FBS0EsQ0FBWDtBQUNHL0csY0FBSUMsT0FBT0MsRUFBWCxDQURIO0FBRUc2RyxjQUFJTixRQUFRQyxNQUFSLEdBQWlCLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDO0FBRm5DO0FBRkc7QUFBQSxLQUZlLENBQXRCO0FBU0EsV0FDRTtBQUFBO0FBQUE7QUFDR0U7QUFESCxLQURGO0FBS0QsR0E1Ulk7QUE2UmJJLGtCQUFnQjVHLFNBN1JILEVBNlJjO0FBQzNCO0FBQ0E2RywyQ0EvUmE7QUFnU2JDLHFCQUFtQjlHLFNBaFNOO0FBaVNiK0csaUJBQWUvRyxTQWpTRjtBQWtTYmdILG9CQUFrQjtBQUFBLFFBQUd2RixTQUFILFVBQUdBLFNBQUg7QUFBQSxRQUFjcEQsT0FBZCxVQUFjQSxPQUFkO0FBQUEsUUFBdUJxRyxXQUF2QixVQUF1QkEsV0FBdkI7QUFBQSxRQUF1Q08sSUFBdkM7O0FBQUEsV0FDaEI7QUFBQTtBQUFBO0FBQ0UsbUJBQVcsMEJBQVcsVUFBWCxFQUF1QixFQUFFLFdBQVc1RyxPQUFiLEVBQXZCLEVBQStDb0QsU0FBL0M7QUFEYixTQUVNd0QsSUFGTjtBQUlFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDR1A7QUFESDtBQUpGLEtBRGdCO0FBQUEsR0FsU0w7QUE0U2J1QyxtQkFBaUIsZ0JBQUU5QixxQkFBRixDQUF3QixXQUF4QixFQUFxQyxRQUFyQyxDQTVTSjtBQTZTYitCLG9CQUFrQixnQkFBRS9CLHFCQUFGLENBQXdCLFlBQXhCLEVBQXNDLFNBQXRDLENBN1NMO0FBOFNiZ0MsbUJBQWlCO0FBQUEsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47QUFBQTtBQTlTSixDIiwiZmlsZSI6ImRlZmF1bHRQcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbidcblxuY29uc3QgZW1wdHlPYmogPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gR2VuZXJhbFxuICBkYXRhOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNob3dQYWdpbmF0aW9uOiB0cnVlLFxuICBzaG93UGFnaW5hdGlvblRvcDogZmFsc2UsXG4gIHNob3dQYWdpbmF0aW9uQm90dG9tOiB0cnVlLFxuICBzaG93UGFnZVNpemVPcHRpb25zOiB0cnVlLFxuICBwYWdlU2l6ZU9wdGlvbnM6IFs1LCAxMCwgMjAsIDI1LCA1MCwgMTAwXSxcbiAgZGVmYXVsdFBhZ2VTaXplOiAyMCxcbiAgc2hvd1BhZ2VKdW1wOiB0cnVlLFxuICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IHRydWUsXG4gIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiB0cnVlLFxuICBmcmVlemVXaGVuRXhwYW5kZWQ6IGZhbHNlLFxuICBzb3J0YWJsZTogdHJ1ZSxcbiAgbXVsdGlTb3J0OiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIGZpbHRlcmFibGU6IGZhbHNlLFxuICBkZWZhdWx0U29ydERlc2M6IGZhbHNlLFxuICBkZWZhdWx0U29ydGVkOiBbXSxcbiAgZGVmYXVsdEZpbHRlcmVkOiBbXSxcbiAgZGVmYXVsdFJlc2l6ZWQ6IFtdLFxuICBkZWZhdWx0RXhwYW5kZWQ6IHt9LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgZGVmYXVsdEZpbHRlck1ldGhvZDogKGZpbHRlciwgcm93LCBjb2x1bW4pID0+IHtcbiAgICBjb25zdCBpZCA9IGZpbHRlci5waXZvdElkIHx8IGZpbHRlci5pZFxuICAgIHJldHVybiByb3dbaWRdICE9PSB1bmRlZmluZWRcbiAgICAgID8gU3RyaW5nKHJvd1tpZF0pLnN0YXJ0c1dpdGgoZmlsdGVyLnZhbHVlKVxuICAgICAgOiB0cnVlXG4gIH0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBkZWZhdWx0U29ydE1ldGhvZDogKGEsIGIsIGRlc2MpID0+IHtcbiAgICAvLyBmb3JjZSBudWxsIGFuZCB1bmRlZmluZWQgdG8gdGhlIGJvdHRvbVxuICAgIGEgPSBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCA/ICcnIDogYVxuICAgIGIgPSBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCA/ICcnIDogYlxuICAgIC8vIGZvcmNlIGFueSBzdHJpbmcgdmFsdWVzIHRvIGxvd2VyY2FzZVxuICAgIGEgPSB0eXBlb2YgYSA9PT0gJ3N0cmluZycgPyBhLnRvTG93ZXJDYXNlKCkgOiBhXG4gICAgYiA9IHR5cGVvZiBiID09PSAnc3RyaW5nJyA/IGIudG9Mb3dlckNhc2UoKSA6IGJcbiAgICAvLyBSZXR1cm4gZWl0aGVyIDEgb3IgLTEgdG8gaW5kaWNhdGUgYSBzb3J0IHByaW9yaXR5XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICAvLyByZXR1cm5pbmcgMCwgdW5kZWZpbmVkIG9yIGFueSBmYWxzZXkgdmFsdWUgd2lsbCB1c2Ugc3Vic2VxdWVudCBzb3J0cyBvclxuICAgIC8vIHRoZSBpbmRleCBhcyBhIHRpZWJyZWFrZXJcbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgUHJvcHNcbiAgLy8gcGFnZTogdW5kZWZpbmVkLFxuICAvLyBwYWdlU2l6ZTogdW5kZWZpbmVkLFxuICAvLyBzb3J0ZWQ6IFtdLFxuICAvLyBmaWx0ZXJlZDogW10sXG4gIC8vIHJlc2l6ZWQ6IFtdLFxuICAvLyBleHBhbmRlZDoge30sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBDYWxsYmFja3NcbiAgb25QYWdlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25Tb3J0ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaWx0ZXJlZENoYW5nZTogdW5kZWZpbmVkLFxuICBvblJlc2l6ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25FeHBhbmRlZENoYW5nZTogdW5kZWZpbmVkLFxuXG4gIC8vIFBpdm90aW5nXG4gIHBpdm90Qnk6IHVuZGVmaW5lZCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRHcm91cFRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRib2R5UHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUckdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGRQcm9wczogZW1wdHlPYmosXG4gIGdldFRmb290UHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRQYWdpbmF0aW9uUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRMb2FkaW5nUHJvcHM6IGVtcHR5T2JqLFxuICBnZXROb0RhdGFQcm9wczogZW1wdHlPYmosXG4gIGdldFJlc2l6ZXJQcm9wczogZW1wdHlPYmosXG5cbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xuICBjb2x1bW46IHtcbiAgICAvLyBSZW5kZXJlcnNcbiAgICBDZWxsOiB1bmRlZmluZWQsXG4gICAgSGVhZGVyOiB1bmRlZmluZWQsXG4gICAgRm9vdGVyOiB1bmRlZmluZWQsXG4gICAgQWdncmVnYXRlZDogdW5kZWZpbmVkLFxuICAgIFBpdm90OiB1bmRlZmluZWQsXG4gICAgUGl2b3RWYWx1ZTogdW5kZWZpbmVkLFxuICAgIEV4cGFuZGVyOiB1bmRlZmluZWQsXG4gICAgRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgLy8gQWxsIENvbHVtbnNcbiAgICBzb3J0YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIHJlc2l6YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIGZpbHRlcmFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBzaG93OiB0cnVlLFxuICAgIG1pbldpZHRoOiAxMDAsXG4gICAgLy8gQ2VsbHMgb25seVxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IHt9LFxuICAgIGdldFByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBQaXZvdCBvbmx5XG4gICAgYWdncmVnYXRlOiB1bmRlZmluZWQsXG4gICAgLy8gSGVhZGVycyBvbmx5XG4gICAgaGVhZGVyQ2xhc3NOYW1lOiAnJyxcbiAgICBoZWFkZXJTdHlsZToge30sXG4gICAgZ2V0SGVhZGVyUHJvcHM6IGVtcHR5T2JqLFxuICAgIC8vIEZvb3RlcnMgb25seVxuICAgIGZvb3RlckNsYXNzTmFtZTogJycsXG4gICAgZm9vdGVyU3R5bGU6IHt9LFxuICAgIGdldEZvb3RlclByb3BzOiBlbXB0eU9iaixcbiAgICBmaWx0ZXJNZXRob2Q6IHVuZGVmaW5lZCxcbiAgICBmaWx0ZXJBbGw6IGZhbHNlLFxuICAgIHNvcnRNZXRob2Q6IHVuZGVmaW5lZCxcbiAgfSxcblxuICAvLyBHbG9iYWwgRXhwYW5kZXIgQ29sdW1uIERlZmF1bHRzXG4gIGV4cGFuZGVyRGVmYXVsdHM6IHtcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMzUsXG4gIH0sXG5cbiAgcGl2b3REZWZhdWx0czoge1xuICAgIC8vIGV4dGVuZCB0aGUgZGVmYXVsdHMgZm9yIHBpdm90ZWQgY29sdW1ucyBoZXJlXG4gIH0sXG5cbiAgLy8gVGV4dFxuICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXG4gIG5leHRUZXh0OiAnTmV4dCcsXG4gIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXG4gIG5vRGF0YVRleHQ6ICdObyByb3dzIGZvdW5kJyxcbiAgcGFnZVRleHQ6ICdQYWdlJyxcbiAgb2ZUZXh0OiAnb2YnLFxuICByb3dzVGV4dDogJ3Jvd3MnLFxuXG4gIC8vIENvbXBvbmVudHNcbiAgVGFibGVDb21wb25lbnQ6ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtdGFibGUnLCBjbGFzc05hbWUpfVxuICAgICAgcm9sZT1cImdyaWRcIlxuICAgICAgLy8gdGFiSW5kZXg9JzAnXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIFRoZWFkQ29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGhlYWQnLCAnVGhlYWQnKSxcbiAgVGJvZHlDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10Ym9keScsICdUYm9keScpLFxuICBUckdyb3VwQ29tcG9uZW50OiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRyLWdyb3VwJywgY2xhc3NOYW1lKX1cbiAgICAgIHJvbGU9XCJyb3dncm91cFwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIFRyQ29tcG9uZW50OiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRyJywgY2xhc3NOYW1lKX1cbiAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBUaENvbXBvbmVudDogKHsgdG9nZ2xlU29ydCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC10aCcsIGNsYXNzTmFtZSl9XG4gICAgICBvbkNsaWNrPXtlID0+IChcbiAgICAgICAgdG9nZ2xlU29ydCAmJiB0b2dnbGVTb3J0KGUpXG4gICAgICApfVxuICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICB0YWJJbmRleD1cIi0xXCIgLy8gUmVzb2x2ZXMgZXNsaW50IGlzc3VlcyB3aXRob3V0IGltcGxlbWVudGluZyBrZXlib2FyZCBuYXZpZ2F0aW9uIGluY29ycmVjdGx5XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIFRkQ29tcG9uZW50OiAoeyB0b2dnbGVTb3J0LCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRkJywgY2xhc3NOYW1lKX1cbiAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIFRmb290Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGZvb3QnLCAnVGZvb3QnKSxcbiAgRmlsdGVyQ29tcG9uZW50OiAoeyBmaWx0ZXIsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCByZXJlbmRlciA9ICgpID0+IHtcblxuICAgICAgICAgICAgUmVhY3QucmVuZGVyQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+eyhmaWx0ZXIpID8gZmlsdGVyLnZhbHVlIDogJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PnsoZmlsdGVyKSA/IGZpbHRlci52YWx1ZSA6ICcnfTwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17ZmlsdGVyID8gZmlsdGVyLnZhbHVlIDogJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICByZXJlbmRlcigpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKX0sXG4gIEV4cGFuZGVyQ29tcG9uZW50OiAoeyBpc0V4cGFuZGVkIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncnQtZXhwYW5kZXInLCBpc0V4cGFuZGVkICYmICctb3BlbicpfT5cbiAgICAgICZidWxsO1xuICAgIDwvZGl2PlxuICApLFxuICBQaXZvdFZhbHVlQ29tcG9uZW50OiAoeyBzdWJSb3dzLCB2YWx1ZSB9KSA9PiAoXG4gICAgPHNwYW4+XG4gICAgICB7dmFsdWV9IHtzdWJSb3dzICYmIGAoJHtzdWJSb3dzLmxlbmd0aH0pYH1cbiAgICA8L3NwYW4+XG4gICksXG4gIEFnZ3JlZ2F0ZWRDb21wb25lbnQ6ICh7IHN1YlJvd3MsIGNvbHVtbiB9KSA9PiB7XG4gICAgY29uc3QgcHJldmlld1ZhbHVlcyA9IHN1YlJvd3NcbiAgICAgIC5maWx0ZXIoZCA9PiB0eXBlb2YgZFtjb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJylcbiAgICAgIC5tYXAoKHJvdywgaSkgPT4gKFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgIDxzcGFuIGtleT17aX0+XG4gICAgICAgICAge3Jvd1tjb2x1bW4uaWRdfVxuICAgICAgICAgIHtpIDwgc3ViUm93cy5sZW5ndGggLSAxID8gJywgJyA6ICcnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApKVxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAge3ByZXZpZXdWYWx1ZXN9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9LFxuICBQaXZvdENvbXBvbmVudDogdW5kZWZpbmVkLCAvLyB0aGlzIGlzIGEgY29tcHV0ZWQgZGVmYXVsdCBnZW5lcmF0ZWQgdXNpbmdcbiAgLy8gdGhlIEV4cGFuZGVyQ29tcG9uZW50IGFuZCBQaXZvdFZhbHVlQ29tcG9uZW50IGF0IHJ1bi10aW1lIGluIG1ldGhvZHMuanNcbiAgUGFnaW5hdGlvbkNvbXBvbmVudDogUGFnaW5hdGlvbixcbiAgUHJldmlvdXNDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTmV4dENvbXBvbmVudDogdW5kZWZpbmVkLFxuICBMb2FkaW5nQ29tcG9uZW50OiAoeyBjbGFzc05hbWUsIGxvYWRpbmcsIGxvYWRpbmdUZXh0LCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1sb2FkaW5nJywgeyAnLWFjdGl2ZSc6IGxvYWRpbmcgfSwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLWxvYWRpbmctaW5uZXJcIj5cbiAgICAgICAge2xvYWRpbmdUZXh0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICksXG4gIE5vRGF0YUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LW5vRGF0YScsICdOb0RhdGEnKSxcbiAgUmVzaXplckNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXJlc2l6ZXInLCAnUmVzaXplcicpLFxuICBQYWRSb3dDb21wb25lbnQ6ICgpID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4sXG59XG4iXX0=