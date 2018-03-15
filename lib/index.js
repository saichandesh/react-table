'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false,
      filterInputTextValue: ''
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing,
          filterInputTextValue = resolvedState.filterInputTextValue;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: _utils2.default.asPx(width),
          maxWidth: _utils2.default.asPx(maxWidth)
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, getResizerProps('finalState', undefined, column, _this2))) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(isResizable && 'rt-resizable-header-content') },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          console.log('------in here filtered------');
          if (filter.id === column.id) {
            console.log('value : ' + JSON.stringify(filter));
          }
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: _this2.state.filterInputTextValue,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var useOnExpanderClick = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              var interactionProps = {
                onClick: resolvedOnExpanderClick
              };

              if (tdProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  tdProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              if (columnProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  columnProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: _utils2.default.asPx(width),
                    maxWidth: _utils2.default.asPx(maxWidth)
                  })
                }, tdProps.rest, columnProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow)
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && !_this2.props.loading && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.propTypes = _propTypes2.default;
ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwiZmlsdGVySW5wdXRUZXh0VmFsdWUiLCJyZXNvbHZlZFN0YXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwibXVsdGlTb3J0IiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIlN1YkNvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiLCJyZXNvbHZlZERhdGEiLCJhbGxWaXNpYmxlQ29sdW1ucyIsImhlYWRlckdyb3VwcyIsImhhc0hlYWRlckdyb3VwcyIsInNvcnRlZERhdGEiLCJzdGFydFJvdyIsImVuZFJvdyIsInBhZ2VSb3dzIiwic2xpY2UiLCJtaW5Sb3dzIiwicGFkUm93cyIsInJhbmdlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImhhc0NvbHVtbkZvb3RlciIsInNvbWUiLCJkIiwiRm9vdGVyIiwiaGFzRmlsdGVycyIsInJlY3Vyc2VSb3dzVmlld0luZGV4Iiwicm93cyIsInBhdGgiLCJpbmRleCIsIm1hcCIsInJvdyIsImkiLCJyb3dXaXRoVmlld0luZGV4IiwiX3ZpZXdJbmRleCIsIm5ld1BhdGgiLCJjb25jYXQiLCJnZXQiLCJjYW5QcmV2aW91cyIsImNhbk5leHQiLCJyb3dNaW5XaWR0aCIsInN1bSIsInJlc2l6ZWRDb2x1bW4iLCJmaW5kIiwieCIsImlkIiwiZ2V0Rmlyc3REZWZpbmVkIiwidmFsdWUiLCJ3aWR0aCIsIm1pbldpZHRoIiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwicm9vdFByb3BzIiwic3BsaXRQcm9wcyIsInVuZGVmaW5lZCIsInRhYmxlUHJvcHMiLCJ0Qm9keVByb3BzIiwibG9hZGluZ1Byb3BzIiwibm9EYXRhUHJvcHMiLCJtYWtlSGVhZGVyR3JvdXAiLCJjb2x1bW4iLCJyZXNpemVkVmFsdWUiLCJjb2wiLCJmbGV4IiwiY29sdW1ucyIsIm1heFdpZHRoIiwidGhlYWRHcm91cFRoUHJvcHMiLCJjb2x1bW5IZWFkZXJQcm9wcyIsImdldEhlYWRlclByb3BzIiwiY2xhc3NlcyIsImhlYWRlckNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlclN0eWxlIiwicmVzdCIsImZsZXhTdHlsZXMiLCJhc1B4Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiSGVhZGVyIiwiZGF0YSIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJyZXNpemVkQ29sIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwiaXNTb3J0YWJsZSIsImRlc2MiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQiLCJGaWx0ZXIiLCJpc0ZpbHRlcmFibGUiLCJvbkNoYW5nZSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VQYWdlUm93Iiwicm93SW5mbyIsIm9yaWdpbmFsIiwidmlld0luZGV4IiwibGV2ZWwiLCJuZXN0aW5nUGF0aCIsImFnZ3JlZ2F0ZWQiLCJncm91cGVkQnlQaXZvdCIsInN1YlJvd3MiLCJpc0V4cGFuZGVkIiwidHJHcm91cFByb3BzIiwidHJQcm9wcyIsImpvaW4iLCJpMiIsInRkUHJvcHMiLCJjb2x1bW5Qcm9wcyIsImNlbGxJbmZvIiwicGl2b3RlZCIsImV4cGFuZGVyIiwidXNlT25FeHBhbmRlckNsaWNrIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsImluZGV4T2YiLCJyZXNvbHZlZE9uRXhwYW5kZXJDbGljayIsImludGVyYWN0aW9uUHJvcHMiLCJvbkNsaWNrIiwibWFrZVBhZENvbHVtbiIsIm1ha2VQYWRSb3ciLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VDb2x1bW5Gb290ZXJzIiwidEZvb3RQcm9wcyIsInRGb290VHJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwibWFrZVRhYmxlIiwicGFnaW5hdGlvbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUxBOzs7QUFPTyxJQUFNQSx3RUFBTjs7SUFFY0MsVTs7O0FBSW5CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFDQSxVQUFLSyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JMLElBQXBCLE9BQXRCO0FBQ0EsVUFBS00sVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCTixJQUFoQixPQUFsQjtBQUNBLFVBQUtPLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjUCxJQUFkLE9BQWhCO0FBQ0EsVUFBS1EsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCUixJQUFoQixPQUFsQjtBQUNBLFVBQUtTLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQlQsSUFBbEIsT0FBcEI7QUFDQSxVQUFLVSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQlYsSUFBdEIsT0FBeEI7QUFDQSxVQUFLVyxV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U0dlLHlCQVRIO0FBVUdyRSx5QkFBYW1GLGFBQWIsR0FBNkIsSUFWaEM7QUFXRTtBQUFDLDRCQUFEO0FBQUE7QUFDRSwyQkFBVywwQkFBV3BELFdBQVdsSCxTQUF0QixDQURiO0FBRUUsb0NBQ0trSCxXQUFXakgsS0FEaEI7QUFFRTBHLDRCQUFhVCxXQUFiO0FBRkY7QUFGRixpQkFNTWdCLFdBQVdpQixJQU5qQjtBQVFHNUQsdUJBQVNpQixHQUFULENBQWEsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEsdUJBQVUrRSxZQUFZeEYsQ0FBWixFQUFlUyxDQUFmLENBQVY7QUFBQSxlQUFiLENBUkg7QUFTR2hCLHNCQUFRYyxHQUFSLENBQVk4SCxVQUFaO0FBVEgsYUFYRjtBQXNCR3ZJLDhCQUFrQjRJLG1CQUFsQixHQUF3QztBQXRCM0MsV0FiRjtBQXFDR25NLDRCQUFrQkUsb0JBQWxCLEdBQ0c7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNDdU07QUFERCxXQURILEdBSUcsSUF6Q047QUEwQ0csV0FBQzFKLFNBQVNPLE1BQVYsSUFBb0IsQ0FBQyxPQUFLakgsS0FBTCxDQUFXNkUsT0FBaEMsSUFDQztBQUFDLDJCQUFEO0FBQXFCMEUsdUJBQXJCO0FBQ0csNEJBQUVrQixrQkFBRixDQUFxQnpHLFVBQXJCO0FBREgsV0EzQ0o7QUE4Q0Usd0NBQUMsZ0JBQUQ7QUFDRSxxQkFBU2EsT0FEWDtBQUVFLHlCQUFhZDtBQUZmLGFBR011RixZQUhOO0FBOUNGLFNBREY7QUFzREQsT0F4REQ7O0FBMERBO0FBQ0EsYUFBT3BILFdBQVdBLFNBQVM4RyxVQUFULEVBQXFCbUgsU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQTcrQnFDLHVCQUFRLDBDQUFSLEM7O0FBQW5CcFEsVSxDQUNac1EsUztBQURZdFEsVSxDQUVadVEsWTtrQkFGWXZRLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTGlmZWN5Y2xlIGZyb20gJy4vbGlmZWN5Y2xlJ1xuaW1wb3J0IE1ldGhvZHMgZnJvbSAnLi9tZXRob2RzJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHRQcm9wcydcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wVHlwZXMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHByb3BUeXBlc1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5nZXRSZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldERhdGFNb2RlbCA9IHRoaXMuZ2V0RGF0YU1vZGVsLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlyZUZldGNoRGF0YSA9IHRoaXMuZmlyZUZldGNoRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRQcm9wT3JTdGF0ZSA9IHRoaXMuZ2V0UHJvcE9yU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U3RhdGVPclByb3AgPSB0aGlzLmdldFN0YXRlT3JQcm9wLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydERhdGEgPSB0aGlzLnNvcnREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldE1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25QYWdlU2l6ZUNoYW5nZSA9IHRoaXMub25QYWdlU2l6ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0Q29sdW1uID0gdGhpcy5zb3J0Q29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLmZpbHRlckNvbHVtbiA9IHRoaXMuZmlsdGVyQ29sdW1uLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0ID0gdGhpcy5yZXNpemVDb2x1bW5TdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5FbmQgPSB0aGlzLnJlc2l6ZUNvbHVtbkVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcgPSB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZy5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICAgIGZpbHRlcklucHV0VGV4dFZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZFByb3BzLFxuICAgICAgZ2V0VGhlYWRUclByb3BzLFxuICAgICAgZ2V0VGhlYWRUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyxcbiAgICAgIGdldFRib2R5UHJvcHMsXG4gICAgICBnZXRUckdyb3VwUHJvcHMsXG4gICAgICBnZXRUclByb3BzLFxuICAgICAgZ2V0VGRQcm9wcyxcbiAgICAgIGdldFRmb290UHJvcHMsXG4gICAgICBnZXRUZm9vdFRyUHJvcHMsXG4gICAgICBnZXRUZm9vdFRkUHJvcHMsXG4gICAgICBnZXRQYWdpbmF0aW9uUHJvcHMsXG4gICAgICBnZXRMb2FkaW5nUHJvcHMsXG4gICAgICBnZXROb0RhdGFQcm9wcyxcbiAgICAgIGdldFJlc2l6ZXJQcm9wcyxcbiAgICAgIHNob3dQYWdpbmF0aW9uLFxuICAgICAgc2hvd1BhZ2luYXRpb25Ub3AsXG4gICAgICBzaG93UGFnaW5hdGlvbkJvdHRvbSxcbiAgICAgIG1hbnVhbCxcbiAgICAgIGxvYWRpbmdUZXh0LFxuICAgICAgbm9EYXRhVGV4dCxcbiAgICAgIHNvcnRhYmxlLFxuICAgICAgbXVsdGlTb3J0LFxuICAgICAgcmVzaXphYmxlLFxuICAgICAgZmlsdGVyYWJsZSxcbiAgICAgIC8vIFBpdm90aW5nIFN0YXRlXG4gICAgICBwaXZvdElES2V5LFxuICAgICAgcGl2b3RWYWxLZXksXG4gICAgICBwaXZvdEJ5LFxuICAgICAgc3ViUm93c0tleSxcbiAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICBvcmlnaW5hbEtleSxcbiAgICAgIGluZGV4S2V5LFxuICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgLy8gQ29tcG9uZW50c1xuICAgICAgVGFibGVDb21wb25lbnQsXG4gICAgICBUaGVhZENvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJHcm91cENvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgICAgICBmaWx0ZXJJbnB1dFRleHRWYWx1ZVxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IChbXG4gICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgW3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd1dpdGhWaWV3SW5kZXhcbiAgICAgIH0pLFxuICAgICAgaW5kZXgsXG4gICAgXSlcbiAgICA7W3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBjb25zdCByb3dNaW5XaWR0aCA9IF8uc3VtKFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVkQ29sdW1uID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gZC5pZCkgfHwge31cbiAgICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2x1bW4udmFsdWUsIGQud2lkdGgsIGQubWluV2lkdGgpXG4gICAgICB9KSxcbiAgICApXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICBnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgIClcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkVmFsdWUgPSBjb2wgPT5cbiAgICAgICAgKHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbC5pZCkgfHwge30pLnZhbHVlXG4gICAgICBjb25zdCBmbGV4ID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChcbiAgICAgICAgICBjb2wgPT4gKGNvbC53aWR0aCB8fCByZXNpemVkVmFsdWUoY29sKSA/IDAgOiBjb2wubWluV2lkdGgpLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgY29uc3Qgd2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PlxuICAgICAgICAgIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5taW5XaWR0aCksXG4gICAgICAgICksXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uc3VtKFxuICAgICAgICBjb2x1bW4uY29sdW1ucy5tYXAoY29sID0+XG4gICAgICAgICAgXy5nZXRGaXJzdERlZmluZWQocmVzaXplZFZhbHVlKGNvbCksIGNvbC53aWR0aCwgY29sLm1heFdpZHRoKSxcbiAgICAgICAgKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgdGhlYWRHcm91cFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleFN0eWxlcyA9IHtcbiAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICAuLi5mbGV4U3R5bGVzLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZEdyb3VwUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUmVzaXphYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnJlc2l6YWJsZSwgcmVzaXphYmxlLCBmYWxzZSlcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSBpc1Jlc2l6YWJsZVxuICAgICAgICA/ICg8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sdW1uLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sdW1uLCB0cnVlKX1cbiAgICAgICAgICB7Li4uZ2V0UmVzaXplclByb3BzKCdmaW5hbFN0YXRlJywgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpfVxuICAgICAgICAvPilcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGNvbnN0IGlzU29ydGFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4uc29ydGFibGUsIHNvcnRhYmxlLCBmYWxzZSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICBpc1Jlc2l6YWJsZSAmJiAncnQtcmVzaXphYmxlLWhlYWRlcicsXG4gICAgICAgICAgICBzb3J0ID8gKHNvcnQuZGVzYyA/ICctc29ydC1kZXNjJyA6ICctc29ydC1hc2MnKSA6ICcnLFxuICAgICAgICAgICAgaXNTb3J0YWJsZSAmJiAnLWN1cnNvci1wb2ludGVyJyxcbiAgICAgICAgICAgICFzaG93ICYmICctaGlkZGVuJyxcbiAgICAgICAgICAgIHBpdm90QnkgJiZcbiAgICAgICAgICAgICAgcGl2b3RCeS5zbGljZSgwLCAtMSkuaW5jbHVkZXMoY29sdW1uLmlkKSAmJlxuICAgICAgICAgICAgICAncnQtaGVhZGVyLXBpdm90JyxcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlmIChpc1NvcnRhYmxlKSB0aGlzLnNvcnRDb2x1bW4oY29sdW1uLCBtdWx0aVNvcnQgPyBlLnNoaWZ0S2V5IDogZmFsc2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGlzUmVzaXphYmxlICYmICdydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQnKX0+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzaXplcn1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyJywgdGhlYWRQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlSGVhZGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgLS0tLS0taW4gaGVyZSBmaWx0ZXJlZC0tLS0tLWApO1xuICAgICAgICBpZihmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZCl7XG4gICAgICAgICAgY29uc29sZS5sb2coYHZhbHVlIDogJHtKU09OLnN0cmluZ2lmeShmaWx0ZXIpfWApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIGNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgICBmaWx0ZXJhYmxlLFxuICAgICAgICBmYWxzZSxcbiAgICAgIClcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVySW5wdXRUZXh0VmFsdWUsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWZhdWx0UHJvcHMuY29sdW1uLkZpbHRlcixcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRGaWx0ZXJQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXG4gICAgICAgIHJvdyxcbiAgICAgICAgaW5kZXg6IHJvd1tpbmRleEtleV0sXG4gICAgICAgIHZpZXdJbmRleDogcm93SW5kZXggKz0gMSxcbiAgICAgICAgcGFnZVNpemUsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyR3JvdXBQcm9wcyA9IGdldFRyR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUclByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHJHcm91cENvbXBvbmVudCBrZXk9e3Jvd0luZm8ubmVzdGluZ1BhdGguam9pbignXycpfSB7Li4udHJHcm91cFByb3BzfT5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgICAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgY29sdW1uLm1pbldpZHRoLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgICAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgY29sdW1uLm1heFdpZHRoLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgICAgICAgICAgZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgICByZXNpemVkLFxuICAgICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgICBsZXQgdXNlT25FeHBhbmRlckNsaWNrXG4gICAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgICAgY29uc3Qgb25FeHBhbmRlckNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IG5ld0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgc3RhbmRhcmQgY2VsbFxuICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgY29sdW1uLkNlbGwsXG4gICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAvLyBSZXNvbHZlIFJlbmRlcmVyc1xuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkIHx8XG4gICAgICAgICAgICAgICAgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uRXhwYW5kZXIgfHwgRXhwYW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uUGl2b3RWYWx1ZSB8fCBQaXZvdFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbnN0IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBQaXZvdENvbXBvbmVudCB8fFxuICAgICAgICAgICAgICAgIChwcm9wcyA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHVzZU9uRXhwYW5kZXJDbGljayA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkICYmICFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjb2x1bW4gYSBicmFuY2g/XG4gICAgICAgICAgICAgICAgaXNCcmFuY2ggPVxuICAgICAgICAgICAgICAgICAgcm93SW5mby5yb3dbcGl2b3RJREtleV0gPT09IGNvbHVtbi5pZCAmJiBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgICAgLy8gU2hvdWxkIHRoaXMgY29sdW1uIGJlIGJsYW5rP1xuICAgICAgICAgICAgICAgIGlzUHJldmlldyA9XG4gICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2YoY29sdW1uLmlkKSA+XG4gICAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihyb3dJbmZvLnJvd1twaXZvdElES2V5XSkgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFBpdm90IENlbGwgUmVuZGVyIE92ZXJyaWRlXG4gICAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgIFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGlmIChwaXZvdEJ5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkT25FeHBhbmRlckNsaWNrID0gdXNlT25FeHBhbmRlckNsaWNrXG4gICAgICAgICAgICAgICAgPyBvbkV4cGFuZGVyQ2xpY2tcbiAgICAgICAgICAgICAgICA6ICgpID0+IHt9XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIG9uQ2xpY2sgZXZlbnRzLCBtYWtlIHN1cmUgdGhleSBkb24ndFxuICAgICAgICAgICAgICAvLyBvdmVycmlkZSBlYWNob3RoZXIuIFRoaXMgc2hvdWxkIG1heWJlIGJlIGV4cGFuZGVkIHRvIGhhbmRsZSBhbGxcbiAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gYXR0cmlidXRlc1xuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHJlc29sdmVkT25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRkUHJvcHMucmVzdC5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcy5vbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0ZFByb3BzLnJlc3Qub25DbGljayhlLCAoKSA9PiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayhlKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29sdW1uUHJvcHMucmVzdC5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcy5vbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5yZXN0Lm9uQ2xpY2soZSwgKCkgPT4gcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2soZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2kyfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCcsXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvblByb3BzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZXNvbHZlZENlbGx9XG4gICAgICAgICAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgICB7cm93SW5mby5zdWJSb3dzICYmXG4gICAgICAgICAgICBpc0V4cGFuZGVkICYmXG4gICAgICAgICAgICByb3dJbmZvLnN1YlJvd3MubWFwKChkLCBpKSA9PlxuICAgICAgICAgICAgICBtYWtlUGFnZVJvdyhkLCBpLCByb3dJbmZvLm5lc3RpbmdQYXRoKSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAge1N1YkNvbXBvbmVudCAmJlxuICAgICAgICAgICAgIXJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgICAgU3ViQ29tcG9uZW50KHJvd0luZm8pfVxuICAgICAgICA8L1RyR3JvdXBDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZENvbHVtbiA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IGZsZXggPSB3aWR0aFxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGgsXG4gICAgICApXG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICB0ZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHtmbGV4fSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgdHJHcm91cFByb3BzID0gZ2V0VHJHcm91cFByb3BzKFxuICAgICAgICBmaW5hbFN0YXRlLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcyxcbiAgICAgIClcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnQga2V5PXtpfSB7Li4udHJHcm91cFByb3BzfT5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RyR3JvdXBDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aCxcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoLFxuICAgICAgKVxuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyksXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5Gb290ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSxcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdEZvb3RUZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Gb290ZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udEZvb3RUZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Gb290ZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcyksXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Rm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2luYXRpb25Db21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzb2x2ZWRTdGF0ZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgY2FuUHJldmlvdXM9e2NhblByZXZpb3VzfVxuICAgICAgICAgIGNhbk5leHQ9e2Nhbk5leHR9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cbiAgICAgICAgICBvblBhZ2VTaXplQ2hhbmdlPXt0aGlzLm9uUGFnZVNpemVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnBhZ2luYXRpb25Qcm9wcy5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdSZWFjdFRhYmxlJywgY2xhc3NOYW1lLCByb290UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAuLi5yb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Ub3BcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLXRvcFwiPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICB0YWJsZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJycsXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgIHtwYWRSb3dzLm1hcChtYWtlUGFkUm93KX1cbiAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICB7aGFzQ29sdW1uRm9vdGVyID8gbWFrZUNvbHVtbkZvb3RlcnMoKSA6IG51bGx9XG4gICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b21cbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJvdHRvbVwiPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmICF0aGlzLnByb3BzLmxvYWRpbmcgJiZcbiAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT5cbiAgICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfVxuICAgICAgICAgICAgPC9Ob0RhdGFDb21wb25lbnQ+fVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxuICAgICAgICAgICAgey4uLmxvYWRpbmdQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBjaGlsZFByb3BzIGFyZSBvcHRpb25hbGx5IHBhc3NlZCB0byBhIGZ1bmN0aW9uLWFzLWEtY2hpbGRcbiAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbihmaW5hbFN0YXRlLCBtYWtlVGFibGUsIHRoaXMpIDogbWFrZVRhYmxlKClcbiAgfVxufVxuIl19