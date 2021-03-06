import React from 'react'
import { connect } from 'react-redux'
import { translate } from 'cozy-ui/react/I18n'
import { showModal } from 'react-cozy-helpers'

import FolderView from 'drive/web/modules/layout/FolderView'
import DestroyConfirm from './components/DestroyConfirm'
import Toolbar from './Toolbar'

import { restoreFiles, destroyFiles } from './actions'

//!TODO WTF? inital state ?
const mapStateToProps = () => ({
  isTrashContext: true,
  canDrop: false,
  canUpload: false,
  withSharedBadge: false,
  Toolbar
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: Object.assign({}, ownProps.actions, {
    selection: {
      restore: {
        action: files => dispatch(restoreFiles(files))
      },
      destroy: {
        action: files =>
          dispatch(
            showModal(
              <DestroyConfirm
                fileCount={files.length}
                confirm={() => dispatch(destroyFiles(files))}
              />
            )
          )
      }
    }
  })
})

export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FolderView)
)
